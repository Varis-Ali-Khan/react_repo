// const heading= React.createElement("h1",{id:"heading"},"React From It")


const parent= React.createElement("div",{id:"parent"},
              [React.createElement("div",{id:"child"},
              [React.createElement("h1",{id:"h1"},"H1 tag here "),React.createElement("h2",{id:"h1"},"H2 tag here ")]
              ),
              React.createElement("div",{id:"child2"},
                [React.createElement("h1",{id:"h1"},"H1 tag here "),React.createElement("h2",{id:"h1"},"H2 tag here ")]
                )]
)



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent)