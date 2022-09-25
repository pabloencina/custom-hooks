import { useState } from "react";
import { useEffect } from "react";

const useFetch = (url) => {

    const [ state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null
    })

    const getFetch =async () => {
        const resp = await fetch(url)
        const data = await resp.json()

        setState({
            ...state,
            isLoading:true
        })

        setState({
            data,
            isLoading: false,
            hasError:null
        })
    }

useEffect (() =>{
    getFetch()
},[url])

  return { 
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError
  }
};

export default useFetch;
