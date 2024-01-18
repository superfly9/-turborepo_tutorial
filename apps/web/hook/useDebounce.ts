import { useRef } from 'react'

function useDebounce() {
    let timeoutId = useRef<NodeJS.Timeout>();
    const debouncedCallback = (callback: (args: any) => void, delay?:number)=>{
        return (args:any)=>{
            clearTimeout(timeoutId.current);
            timeoutId.current = setTimeout(()=>callback(args), delay || 1000);
        }
    }
    
  return debouncedCallback;
}

export default useDebounce
