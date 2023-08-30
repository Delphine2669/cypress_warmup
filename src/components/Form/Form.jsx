function Form() {
  return (
    <form>
      <label>Do you agree?</label>
      <label>yes:</label>
      <input type="checkbox" id="checkYes" />
      <label>no:</label>
      <input type="checkbox" id="checkNo" />
      <br />
      <label>Write your motto</label>
      <input type="text" id="userInput" placeholder="motto"></input>
      <button type="submit">Submit</button>
    </form>
  );
}
export default Form;
