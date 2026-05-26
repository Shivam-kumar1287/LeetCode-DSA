window.TopicsData = window.TopicsData || {};
window.TopicsData["OOPS"] = {
    title: "Object-Oriented Programming (OOPS)",
    sections: [
        {
            heading: "Core Concepts",
            items: [
                "**Encapsulation:** Wrapping data (variables) and behavior (methods) into a single unit (class) and restricting direct access (using `private` fields and getters/setters).",
                "**Inheritance:** mechanism where one class acquires the properties and behaviors of a parent class (using `extends`).",
                "**Polymorphism:** The ability of an object to take on many forms. Can be compile-time (overloading) or runtime (overriding).",
                "**Abstraction:** Hiding complex implementation details and showing only essential features (using `interface` or `abstract class`)."
            ]
        },
        {
            heading: "Java Specifics",
            items: [
                "Java classes support single inheritance. A class can extend only one superclass, but can implement multiple interfaces.",
                "`super` is used to refer to immediate parent class instance variables or invoke parent constructors/methods.",
                "`this` refers to the current class instance.",
                "Default constructor is provided by Java compiler only if no other constructor is defined."
            ]
        },
        {
            heading: "Memory Allocation",
            items: [
                "**Stack Memory:** Stores primitive values and references to objects. Memory allocation is automatic and managed via LIFO.",
                "**Heap Memory:** Stores actual objects. Managed by the JVM's Garbage Collector."
            ]
        }
    ],
    mcqs: {
        easy: [],
        medium: [],
        hard: []
    }
};
