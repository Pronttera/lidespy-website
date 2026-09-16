/**
 * One download of the hero clip, shared by the splash (which shows its
 * progress) and the hero (which plays it). The file is fetched whole and
 * handed to the <video> as a blob URL — the exact bytes on disk, so there is
 * no re-encode and no mid-loop buffering once the splash lifts.
 *
 * If the fetch fails the store reports done with the plain file URL, and the
 * element streams it the ordinary way.
 */
export const HERO_VIDEO_SRC = "/hero.mp4";

export type HeroVideoState = {
  /** 0–1. */
  progress: number;
  /** Set once the clip is ready to play. */
  url: string | null;
  /**
   * True once the splash has lifted. The hero holds on frame one until then,
   * so the visitor sees the clip from its first second, not partway in.
   */
  revealed: boolean;
};

let state: HeroVideoState = { progress: 0, url: null, revealed: false };
let started = false;
const listeners = new Set<(s: HeroVideoState) => void>();

function set(next: HeroVideoState) {
  state = next;
  listeners.forEach((l) => l(state));
}

export function subscribeHeroVideo(listener: (s: HeroVideoState) => void): () => void {
  listeners.add(listener);
  listener(state);
  return () => listeners.delete(listener);
}

/** Called by the splash as it gets out of the way. */
export function revealHeroVideo(): void {
  if (!state.revealed) set({ ...state, revealed: true });
}

export function loadHeroVideo(): void {
  if (started || typeof window === "undefined") return;
  started = true;
  void (async () => {
    try {
      const res = await fetch(HERO_VIDEO_SRC);
      if (!res.ok || !res.body) throw new Error(`hero video: ${res.status}`);

      const total = Number(res.headers.get("content-length")) || 0;
      const reader = res.body.getReader();
      const chunks: Uint8Array<ArrayBuffer>[] = [];
      let received = 0;
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        chunks.push(value);
        received += value.byteLength;
        // Without a length, creep toward (never reach) the end.
        const p = total ? received / total : 1 - Math.exp(-received / 2_000_000);
        set({ ...state, progress: Math.min(p, 0.99) });
      }

      const blob = new Blob(chunks, { type: res.headers.get("content-type") || "video/mp4" });
      set({ ...state, progress: 1, url: URL.createObjectURL(blob) });
    } catch {
      set({ ...state, progress: 1, url: HERO_VIDEO_SRC });
    }
  })();
}
