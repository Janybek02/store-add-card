export default function Categories({ categories, handleOnSubmit }) {
  // console.log(categories);
  return (
    <>
      <div>
        <select
          name="select"
          defaultValue={"all"}
          onClick={(e) => handleOnSubmit(e)}
        >
          <option value={categories[0]}>{categories[0]}</option>
          <option value={categories[1]}>{categories[1]}</option>
          <option value={categories[2]}>{categories[2]}</option>
          <option value={categories[3]}>{categories[3]}</option>
          <option value={"all"}>all</option>
        </select>
      </div>
    </>
  );
}
