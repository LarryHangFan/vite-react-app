
import React, { Component, useState } from 'react'
import { Route, Routes, useRoutes } from 'react-router-dom'
import { routes } from './index'

const App: React.FC = () => {
  return useRoutes(routes)
}

export default App