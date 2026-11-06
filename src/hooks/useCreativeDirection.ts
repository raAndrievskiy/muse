import { useEffect, useRef, useState } from 'react';
import type { CreativeDirection, GeneratorState } from '../types/muse';
export function useCreativeDirection(direction: CreativeDirection){
  const [state,setState]=useState<GeneratorState>('idle');
  const timeoutRef=useRef<number | undefined>(undefined);
  useEffect(()=>()=>{if(timeoutRef.current) window.clearTimeout(timeoutRef.current)},[]);
  const generate=()=>{
    if(state==='generating') return;
    setState('generating');
    timeoutRef.current=window.setTimeout(()=>setState('generated'),1100);
  };
  return {state,result:direction,generate};
}
