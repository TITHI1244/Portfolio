function Sidebar() {
  return (
    <div>
      <div className="flex-box left">
        <div id="box-1">
          <p>
            Feeling hungry, but alone too?? Don't you worry, find someone here to share your meal with 👇
          </p>
          <a className="project-links" href="https://meal-sharing-app-tithi.herokuapp.com/" target="_blank" rel="noreferrer">
            See live
          </a>          
        </div>
        <div id="box-2">
          <p>
            Do you agree, a good programmer should have 'respectable' typing
            speed? Wanna check yours?? 👇
          </p>
          <a className="project-links" href="https://tithi1244.github.io/Typing-speed-tester/" target="_blank" rel="noreferrer">
            See live
          </a>
        </div>
      </div>
      <div className="flex-box right">
        <div id="box-3">
          <p>
            Going out? Wondering, what would be the weather condition now?? I
            have a solution 👇
          </p>
          <a className="project-links" href="https://bit.ly/weather-tithi" target="_blank" rel="noreferrer">
            See live
          </a>
        </div>
        <div id="box-4">
          <p>
            Feeling bored? Wanna play a silly game?? You can also choose a
            partner if you want. Check out here 👇
          </p>
          <a className="project-links" href="https://tithi1244.github.io/Left-or-right/" target="_blank" rel="noreferrer">
            See live  
          </a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
