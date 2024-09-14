export default function SearchForm({ onSubmitForm }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target.elements.search.value.trim();
    e.target.reset();
    onSubmitForm(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="search" required />
      <button type="submit">Search</button>
    </form>
  );
}
