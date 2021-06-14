
// ---------------- Props-driling----------


//     <Parent values={ }>
//     <Componet values={props.values}>
//         <SubbComponet values={props.props.value}>
//         </SubbComponet>
//         <SubbComponet>
//             <subSubComponet>
//             </subSubComponet>
//         </SubbComponet>
//     </Componet>
// </Parent>





// here we gona to learn contex to solve props driling problem using contex

// ---------------- Contex ----------

//  Contex: Context is designed to share data that can be considered “global” for a tree of React components,
// such as the current authenticated user, theme, or preferred language. 

// Example:

const [userId, setUserId] = useState();
const UserContex = React.createContext(1);

<UserContex.Provider value={userId, setUserId}>
    <Parent>
        <Componet>
            <SubbComponet>
            </SubbComponet>
            <SubbComponet>
                <subSubComponet>
                </subSubComponet>
            </SubbComponet>
        </Componet>
    </Parent>
</UserContex.Provider>



function Componet() {
    return (
     const {userId, setUserId}  = useContext(UserContex);
     // here we can set userId and we can use anywhere inside UserContex
    )
}