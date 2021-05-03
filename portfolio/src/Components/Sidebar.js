function Sidebar() {
  return (
    <div>
      <div className="flex-box left">
        <div id="box-1">
          <p>
            Going out? Wondering, what would be the weather condition now?? I
            have a solution 👇
          </p>
          <a href="https://www.google.com/" target="_blank" rel="noreferrer">
            Click
          </a>
        </div>
        <div id="box-2">
          <p>
            Feeling bored? Wanna play a silly game?? You can also choose a
            partner if you want. Check out here 👇
          </p>
          <a href="https://www.google.com" target="_blank" rel="noreferrer">
            Click
          </a>
        </div>
      </div>
      <div className="flex-box right">
        <div id="box-3">
          <p>
            Do you agree, a good programmer should have 'respectable' typing
            speed? Wanna check yours?? 👇
          </p>
          <a href="#" target="_blank">
            Click
          </a>
        </div>
        <div id="box-4">
          <p>
            Nothing interesting? Wanna cheer your mood up finding some
            intersting gifs?? Just a click away.. 👇
          </p>
          <a href="#" target="_blank">
            Click
          </a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
