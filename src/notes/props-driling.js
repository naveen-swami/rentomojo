// In this session we gona to learn props -driling

// Contex

// ----------props - driling
// Here we are passing props into their sub componets which is called props drilling 

    <Parent values={ }>
        <Componet values={props.values}>
            <SubbComponet values={props.props.value}>
            </SubbComponet>
            <SubbComponet>
                <subSubComponet>
                </subSubComponet>
            </SubbComponet>
        </Componet>
    </Parent>
