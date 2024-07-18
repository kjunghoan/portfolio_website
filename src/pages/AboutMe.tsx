
// TODO:
// [] actually write an about me
// [] set a max height for the image
// [] maybe make component cards to make everything look nice

export default function AboutMe () {

  return (
    <div
      className="w-100"
      name="page wrapper"
    >
      <div name="imageDiv">
        <img className="" src="/seoul.png" alt="picture of city at night."/>
      </div>
      <div className="m-10 inline-flex">
        <h1
          className="text-4xl font-bold underline underline-offset-8 place-self-center "
        >ABOUT ME</h1>
      </div>
    </div>
  )
}
