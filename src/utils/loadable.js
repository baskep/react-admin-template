import React, { useEffect } from 'react'
import Loadable from 'react-loadable'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const useLoadingComponent = () => {
  useEffect(() => {
    NProgress.start()
    return () => {
      NProgress.done()
    }
  }, [])

  return <div />
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (loader, loading = useLoadingComponent) => {
  return Loadable({
    loader,
    loading,
  })
}
