import BookingForm from './BookingForm'
function Booking(props) {
  return (
        // eslint-disable-next-line react/prop-types
        <BookingForm availableTimes = {props.availableTimes} dispatch = {props.dispatch} submitForm = {props.submitForm}/>
  )
}

export default Booking
