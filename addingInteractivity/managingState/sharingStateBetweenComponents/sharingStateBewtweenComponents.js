const blocks = [
    {
        id: 0,
        elements: [
            {
                id:0.0,
                tag:"plain",
                text: "It is common to call a component with some local state ''uncontrolled''. For example, the original "
            }, {
                id:0.1,
                tag:"span",
                text: "Panel",
                className: "bg-grey"
            }, {
                id:0.2,
                tag:"plain",
                text: " component with an "
            }, {
                id:0.3,
                tag:"span",
                text: "isActive",
                className: "bg-grey"
            }, {
                id:0.4,
                tag:"plain",
                text: " state variable is uncontrolled because its parent cannot influence whether the panel is active or not."
            }
        ]
    },
    {
        id: 1,
        elements: [
            {
                id:1.0,
                tag:"plain",
                text: "In contrast, you might say a component is ''controlled'' when the important information in it is driven by props rather than its own local state. This lets the parent component fully specify its behavior. The final "
            }, {
                id:1.1,
                tag:"span",
                text: "Panel",
                className: "bg-grey"
            }, {
                id: 1.2,
                tag: "plain",
                text: " component with the "
            }, {
                id: 1.3,
                tag: "span",
                text: "isActive",
                className: "bg-grey"
            }, {
                id: 1.4,
                tag: "plain",
                text: " prop is controlled by the "
            }, {
                id: 1.5,
                tag: "span",
                text: "Accordion",
                className: "bg-grey"
            },{
                id: 1.6,
                tag: "plain",
                text: " component."
            }
        ]
    },
    {
        id: 2,
        elements: [
            {
                id: 2.0,
                tag: "plain",
                text: "Uncontrolled components are easier to use within their parents because they require less configuration. But they're less flexible when you want to coordinate them together. Controlled components are maximally flexible, but they require the parent components to fully configure them with props."
            }
        ]
    },
    {
        id: 3,
        elements: [
            {
                id: 3.0,
                tag: "plain",
                text: "In practice, ''controlled'' and ''uncontrolled'' aren't stric technical terms -each component usually has some mix of both local state and props. However, this is a useful way to talk about how components are designed and what capabilities they offer."
            }
        ]
    },
    {
        id: 4,
        elements: [
            {
                id: 4.0,
                tag: "plain",
                text: "When writing a component, consider which information in it should be controlled (via props), and which information should be uncontrolled (via state). But you can always change your mind and refactor later."
            }
        ]
    }
]