import { useEffect, useRef } from 'react';
export function useReveal<T extends HTMLElement>() { const ref=useRef<T>(null); useEffect(()=>{const el=ref.current;if(!el)return;const io=new IntersectionObserver(([entry])=>{if(entry.isIntersecting){el.classList.add('is-visible');io.disconnect()}},{threshold:.14});io.observe(el);return()=>io.disconnect()},[]); return ref; }
