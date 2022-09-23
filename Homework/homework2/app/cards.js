export default class cards extends React.Component {
    state = {recipes: [
        "Apple Pie",
     "Cherry Pie",
     "Cookie",
      "Pizza Pie",
       "Hamburger",
        "Ham Steak",
        "CHocolate Mousse",
        "Chocolate Ice Cream"
    ],
    searchTerm: ""
};

render() {

    // pulling out matching recipies for search terms
    let matchedRecipes = this.state.recipes.filter((recipes) => {
        // return true;
        // return recipe.includes("Pie");
        return recipes.toLocaleUpperCase()
        .includes(this.state.searchTerm.toLocaleUpperCase());

        console.log(matchedRecipes);
    });
    //    this precreate a set of html before we drop it 
            // let recipesList = this.state.recipies.map((recipes) => {
                let recipesList = matchedRecipes.map((recipes) => {
                return <div>{recipes}</div>;
            });
            console.log(recipesList);
            
    return(
        <div className="recipes">
            <h2> Recipes</h2>
            <input 
            value={this.state.searchTerm}
            onChange={(event) => {
            this.updateSearch(event);
             }}
        />
            <ul>{recipesList}</ul> 
            </div>
        );
    }

    updateSearch(event) {
        this.setState({searchTerm: event.target.value});
    }
}


$("search").on("input", function (event) {
    console.log($(this).val());

    // storry shoudl have scared you?
    var search = console.log($(this).val());

    $.grep(movies, function (object) {
        object.name.toLocaleUpperCase().includes(search.towerCase());
        return object.name.Lowercacea. 
    })
})

