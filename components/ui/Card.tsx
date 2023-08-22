import React, { ReactNode } from 'react'

interface CardProps {
  title: string
  children: ReactNode // Component group as children
}

const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className="rounded-md bg-bgBoxLighter  shadow-md rounded p-4 mb-5">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      {children}
    </div>
  )
}

export default Card
