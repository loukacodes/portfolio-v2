### This repo is the second version of my portfolio.
### The aim was to make a clean, readable portfolio site as a way to present current skills set.
### [Live Demo](https://trangtmtran.github.io/portfolio-v2)
### The main changes in this project is ReactJS has been used to iterate all projects data fetched from projects.json file.
```
componentDidMount() {
  $.ajax({
    url: "https://raw.githubusercontent.com/trangtmtran/portfolio-v2/master/public/projects.json",
    dataType: 'json',
    success: function(data) {
      this.setState({projects: data.projects});
    }.bind(this),
    error: function(xhr, status, err) {
      console.log("#GET ERROR", status, err.toString());
    }
  });
}
```
Here using componentDidMount() to make sure data won't be loaded before initial render, also, set initial state like below to avoid error, because component will be rendered once before componenDidMount() is called:
```
this.state = {
  projects: []
};
``` 
### Build with the help of Sass, ReactJS, jQuery, Devicon and Materialize.
