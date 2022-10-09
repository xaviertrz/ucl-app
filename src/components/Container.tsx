function Container({children}: {children: React.ReactNode}) {
  return (
    <div className="bg-gray-50 dark:bg-gray-900">

    <div>
    </div>

    <main>
      {children}
    </main>

    </div>
  )
}

export default Container