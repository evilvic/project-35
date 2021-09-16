import { useRef, useState, useEffect } from 'react'

const getElementSize = element => {
  const { offsetWidth: width, offsetHeight: height } = element.current
  return { width, height }
}

const useElementSize = data => {

  const element = useRef()
  const [ elementSize, setElementSize ] = useState()

  useEffect(() => {
    setElementSize(getElementSize(element))
    const handleResize = () => setElementSize(getElementSize(element))
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [data])

  return { element, ...elementSize }

}

export default useElementSize