import React from "react"
// import PropTypes from "prop-types"
// import Message from "./Message"


const MessagesList = ({messages}) => (
   
  <section id="messages-list" className="Rectangle" >
    <ul>
    {messages.map((message,index) => (
      <li key={index} className="Rectangle-4">{message}</li>
    ))}
    </ul>
  </section>
)

// MessagesList.propTypes = {
//   messages: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       message: PropTypes.string.isRequired,
//       author: PropTypes.string.isRequired
//     }).isRequired
//   ).isRequired
// }

export default MessagesList