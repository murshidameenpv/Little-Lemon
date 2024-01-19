import { useState } from "react"
import PropTypes from 'prop-types';
function BookingForm(props) {
    const [date, setDate] = useState("")
    const [times, setTimes] = useState("")
    const [occasion, setOccasion] = useState("")
    const [guests, setGuests] = useState("")
    const handleChange = (e) => {
        setDate(e)
        props.dispatch(e)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitForm(e)
    }
  return (
      <header>
          <section>
              <form onSubmit={handleSubmit}>
                  <fieldset>
                      <div>
                          <label htmlFor="book-date">Choose Date</label>
                          <input type="date" id="book-date" value={date} onChange={(e)=>handleChange(e.target.value)} required/>
                      </div>
                      <div>
                          <label htmlFor="book-time">Choose Time</label>
                          <select name="book-time" id="book-time" value={times} onChange={(e)=>setTimes(e.target.value)}>
                              <option value="">Select a Time</option>
                              {
                                  props.availableTimes.map(availableTimes => { return <option key={availableTimes}>{availableTimes}</option>})
                              }
                          </select>
                      </div>
                      <div>
                          <label htmlFor="book-guests">Number of Guests:</label>
                          <input id="book-guests" min={1} value={guests} onChange={(e)=>setGuests(e.target.value)} />
                      </div>
                      <div>
                          <label htmlFor="book-occasion">Occasion:</label>
                          <select name="book-occasion" id="book-occasion" key={occasion} value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                              <option>Birthday</option>
                              <option>Anniversary</option>
                          </select>
                      </div>
                      <div className="btnReceive">
                          <input type="submit" aria-label="On Click" value={"Make your Reservation"}/>
                      </div>
                  </fieldset>
              </form>
          </section>
   </header>
  )
}

export default BookingForm
BookingForm.propTypes = {
  availableTimes: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
};