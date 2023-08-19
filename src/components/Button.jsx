function Button(props) {
  return (
    <button
      className='bg-pink-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}

export default Button