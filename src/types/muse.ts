export type GeneratorState = 'idle' | 'generating' | 'generated';
export type CreativeDirection = { title: string; description: string; mood: string[]; palette: string[]; materials: string[]; typography: string; keywords: string[]; image: string };
export type Direction = { number: string; name: string; meta: string; image: string; desc: string };
