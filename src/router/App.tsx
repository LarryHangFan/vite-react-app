
import React, { Component, useState } from 'react'
import { Route, Routes, useRoutes } from 'react-router-dom'
import { guardRoute } from './guard'
import { routes } from './index'

const App: React.FC = () => {
  return guardRoute(routes)
}

export default App