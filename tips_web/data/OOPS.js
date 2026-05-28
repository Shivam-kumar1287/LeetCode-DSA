window.TopicsData = window.TopicsData || {};
window.TopicsData["OOPS"] = {
    title: "Object-Oriented Programming (OOPS)",
    sections: [
        {
            heading: "1. Encapsulation",
            items: [
                `<strong>Definition:</strong> Bundling data (variables) and methods (behavior) into a single unit (class) while hiding internal details and controlling access.`,
                `<strong>Implementation with Access Modifiers:</strong><pre><code>public class BankAccount {
    // Private fields - data hiding
    private String accountNumber;
    private double balance;
    private String ownerName;
    private static final double MIN_BALANCE = 1000.0;
    
    // Constructor
    public BankAccount(String accountNumber, String ownerName, double initialBalance) {
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        if (initialBalance >= MIN_BALANCE) {
            this.balance = initialBalance;
        } else {
            throw new IllegalArgumentException("Minimum balance required: " + MIN_BALANCE);
        }
    }
    
    // Public getters - controlled access
    public String getAccountNumber() { return accountNumber; }
    public double getBalance() { return balance; }
    public String getOwnerName() { return ownerName; }
    
    // Setter with validation
    public void setOwnerName(String ownerName) {
        if (ownerName != null && !ownerName.trim().isEmpty()) {
            this.ownerName = ownerName;
        } else {
            throw new IllegalArgumentException("Invalid owner name");
        }
    }
    
    // Business methods - controlled modification
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            logTransaction("DEPOSIT", amount);
        } else {
            throw new IllegalArgumentException("Deposit amount must be positive");
        }
    }
    
    public void withdraw(double amount) {
        if (amount > 0 && balance - amount >= MIN_BALANCE) {
            balance -= amount;
            logTransaction("WITHDRAWAL", amount);
        } else {
            throw new IllegalArgumentException("Insufficient balance or invalid amount");
        }
    }
    
    // Private method - internal implementation hidden
    private void logTransaction(String type, double amount) {
        System.out.println("Transaction: " + type + " of $" + amount + " at " + new java.util.Date());
    }
}</code></pre>`,
                `<strong>Benefits of Encapsulation:</strong><ul><li><strong>Data Protection:</strong> Prevents unauthorized direct state mutations.</li><li><strong>Flexibility:</strong> Internal fields can be modified without breaking client code.</li><li><strong>Maintainability:</strong> Easier to debug and maintain due to centralized accessor logic.</li><li><strong>Validation:</strong> Ensures class invariants are always satisfied inside setters.</li></ul>`
            ]
        },
        {
            heading: "2. Inheritance",
            items: [
                `<strong>Definition:</strong> Mechanism where one class acquires properties and behaviors of another class (parent-child relationship).`,
                `<strong>Types of Inheritance in Java:</strong><pre><code>// 1. Single Inheritance
class Animal {
    protected String name;
    protected int age;
    
    public Animal(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    public void eat() { System.out.println(name + " is eating"); }
    public void sleep() { System.out.println(name + " is sleeping"); }
}

class Dog extends Animal {
    private String breed;
    public Dog(String name, int age, String breed) {
        super(name, age);  // Call parent constructor
        this.breed = breed;
    }
    
    @Override
    public void eat() {
        System.out.println(name + " the dog is eating dog food");
    }
    
    public void bark() { System.out.println(name + " is barking"); }
}

// 2. Multilevel Inheritance
class Puppy extends Dog {
    private boolean isTrained;
    public Puppy(String name, int age, String breed, boolean isTrained) {
        super(name, age, breed);
        this.isTrained = isTrained;
    }
    public void play() { System.out.println(name + " is playing"); }
}

// 3. Hierarchical Inheritance
class Cat extends Animal {
    public Cat(String name, int age) { super(name, age); }
    @Override
    public void eat() { System.out.println(name + " the cat is eating fish"); }
    public void meow() { System.out.println(name + " is meowing"); }
}</code></pre>`,
                `<strong>Constructor Chaining:</strong> When instantiating a child class, parent constructors are called first in the hierarchy chain. Use <code>super()</code> as the first statement.<pre><code>class Parent {
    Parent() { System.out.println("Parent constructor"); }
    Parent(String msg) { System.out.println("Parent message: " + msg); }
}

class Child extends Parent {
    Child() {
        super(); // Implicitly called if omitted
        System.out.println("Child constructor");
    }
    Child(String msg) {
        super(msg); // Must be the first statement
        System.out.println("Child message: " + msg);
    }
}</code></pre>`
            ]
        },
        {
            heading: "3. Polymorphism",
            items: [
                `<strong>Definition:</strong> The ability of an object or method to take on many forms.`,
                `<strong>Compile-Time Polymorphism (Method Overloading):</strong> Same method name with different parameter lists (count, type, or order). Resolved at compile-time.<pre><code>class Calculator {
    public int add(int a, int b) { return a + b; }
    public int add(int a, int b, int c) { return a + b + c; }
    public double add(double a, double b) { return a + b; }
    public String add(String a, String b) { return a + b; }
}</code></pre>`,
                `<strong>Runtime Polymorphism (Method Overriding):</strong> Overriding parent methods in child classes. The specific method executed is resolved at runtime based on the actual object type.<pre><code>interface Payment {
    void pay(double amount);
}

class CreditCard implements Payment {
    private String cardNum;
    CreditCard(String cardNum) { this.cardNum = cardNum; }
    @Override
    public void pay(double amount) {
        System.out.println("Paid $" + amount + " via Credit Card ending with " + cardNum.substring(cardNum.length() - 4));
    }
}

class PayPal implements Payment {
    private String email;
    PayPal(String email) { this.email = email; }
    @Override
    public void pay(double amount) {
        System.out.println("Paid $" + amount + " via PayPal: " + email);
    }
}

public class Shopping {
    public static void executePayment(Payment p, double amount) {
        p.pay(amount); // Polymorphic execution
    }
}</code></pre>`,
                `<strong>Polymorphic Type Hierarchy (Casting & instanceof):</strong><pre><code>class Employee {
    protected String name; protected double salary;
    Employee(String name, double salary) { this.name = name; this.salary = salary; }
    public double getBonus() { return salary * 0.05; }
}

class Manager extends Employee {
    Manager(String name, double salary) { super(name, salary); }
    @Override
    public double getBonus() { return salary * 0.10; }
    public void scheduleMeeting() { System.out.println(name + " scheduling..."); }
}

public class Main {
    public static void test(Employee e) {
        System.out.println(e.name + " bonus: " + e.getBonus());
        if (e instanceof Manager) {
            Manager m = (Manager) e; // Safe downcasting
            m.scheduleMeeting();
        }
    }
}</code></pre>`
            ]
        },
        {
            heading: "4. Abstraction",
            items: [
                `<strong>Definition:</strong> Hiding complex implementation details and showing only the essential interfaces/features.`,
                `<strong>Abstract Classes (Partial Abstraction):</strong> Can contain abstract methods (no bodies) as well as concrete instance methods and state fields.<pre><code>abstract class Vehicle {
    protected String brand;
    public Vehicle(String brand) { this.brand = brand; }
    public abstract void start(); // Abstract method
    public void display() { System.out.println("Brand: " + brand); } // Concrete method
}

class Car extends Vehicle {
    public Car(String brand) { super(brand); }
    @Override
    public void start() { System.out.println("Car started"); }
}</code></pre>`,
                `<strong>Interfaces (100% Abstraction):</strong> Act as contracts containing method signatures. Java 8+ interfaces can also contain default and static methods.<pre><code>interface Drawable {
    void draw(); // Abstract method
    default void print() { System.out.println("Printing..."); } // Default method
    static void log() { System.out.println("Static Logger"); } // Static method
}

interface Resizable {
    void resize(double factor);
}

// Implementing multiple interfaces
class Circle implements Drawable, Resizable {
    private double radius;
    public Circle(double r) { this.radius = r; }
    @Override
    public void draw() { System.out.println("Drawing circle"); }
    @Override
    public void resize(double f) { this.radius *= f; }
}</code></pre>`,
                `<strong>Abstract Class vs. Interface:</strong><br><table class=\"dsa-table\" style=\"width:100%; border-collapse: collapse; margin: 10px 0; font-size: 0.9rem;\"><thead><tr style=\"border-bottom: 2px solid var(--glass-border); text-align: left;\"><th style=\"padding: 8px;\">Feature</th><th style=\"padding: 8px;\">Abstract Class</th><th style=\"padding: 8px;\">Interface</th></tr></thead><tbody><tr style=\"border-bottom: 1px solid rgba(255,255,255,0.05);\"><td style=\"padding: 8px; font-weight: 600;\">Inheritance</td><td style=\"padding: 8px;\">Single class inheritance</td><td style=\"padding: 8px;\">Multiple interface implementation</td></tr><tr style=\"border-bottom: 1px solid rgba(255,255,255,0.05);\"><td style=\"padding: 8px; font-weight: 600;\">State variables</td><td style=\"padding: 8px;\">Can have instance fields of any type</td><td style=\"padding: 8px;\">Variables must be <code>public static final</code></td></tr><tr style=\"border-bottom: 1px solid rgba(255,255,255,0.05);\"><td style=\"padding: 8px; font-weight: 600;\">Constructors</td><td style=\"padding: 8px;\">Has constructors called via <code>super()</code></td><td style=\"padding: 8px;\">Cannot have constructors</td></tr><tr style=\"border-bottom: 1px solid rgba(255,255,255,0.05);\"><td style=\"padding: 8px; font-weight: 600;\">Methods</td><td style=\"padding: 8px;\">Abstract, default, and final methods</td><td style=\"padding: 8px;\">Abstract, default, and static methods</td></tr></tbody></table>`
            ]
        },
        {
            heading: "5. Java-Specific OOP Features",
            items: [
                `<strong>Multiple Interfaces with Parent:</strong><pre><code>class Child extends Parent implements InterfaceA, InterfaceB {
    @Override public void methodA() {}
    @Override public void methodB() {}
}</code></pre>`,
                `<strong>Usage of <code>this</code> and <code>super</code> keywords:</strong><ul><li><code>this</code> refers to the current class instance. Used to resolve parameter ambiguity or chain constructors using <code>this()</code>.</li><li><code>super</code> refers to the parent class instance. Used to invoke overridden parent methods or call parent constructors using <code>super()</code>.</li></ul>`,
                `<strong>Constructors, Copy Constructors & Builders:</strong><pre><code>class Person {
    private String name; private int age;
    
    // No-arg constructor (calls full constructor)
    public Person() { this("Unknown", 0); }
    
    // Full constructor
    public Person(String name, int age) { this.name = name; this.age = age; }
    
    // Copy constructor (clones fields of another instance)
    public Person(Person other) { this(other.name, other.age); }
}

// Builder Pattern for complex class creations
class User {
    private String name; private String email;
    public static class Builder {
        private User user = new User();
        public Builder setName(String n) { user.name = n; return this; }
        public Builder setEmail(String e) { user.email = e; return this; }
        public User build() { return user; }
    }
}</code></pre>`
            ]
        },
        {
            heading: "6. Key Keywords & Modifiers",
            items: [
                `<strong>Static Keyword:</strong> Declares fields/methods belonging to the class itself rather than instances. Sharing global states across objects.<pre><code>class Counter {
    static int globalCount = 0; // Shared across all instances
    int instanceCount = 0;
    
    Counter() {
        globalCount++;
        instanceCount = globalCount;
    }
    
    static { System.out.println("Static loading block"); } // Executed when class loads
}</code></pre>`,
                `<strong>Final Keyword:</strong> Denotes immutability:<ul><li><strong>Final Variable:</strong> Constant value. Cannot be reassigned.</li><li><strong>Final Method:</strong> Cannot be overridden in child subclasses.</li><li><strong>Final Class:</strong> Cannot be extended or inherited (e.g. Java's <code>String</code> class).</li></ul>`,
                `<strong>Access Modifiers Summary:</strong><br><table class=\"dsa-table\" style=\"width:100%; border-collapse: collapse; margin: 10px 0; font-size: 0.9rem;\"><thead><tr style=\"border-bottom: 2px solid var(--glass-border); text-align: left;\"><th style=\"padding: 8px;\">Modifier</th><th style=\"padding: 8px;\">Same Class</th><th style=\"padding: 8px;\">Same Package</th><th style=\"padding: 8px;\">Subclass (Diff Pkg)</th><th style=\"padding: 8px;\">World (Diff Pkg)</th></tr></thead><tbody><tr style=\"border-bottom: 1px solid rgba(255,255,255,0.05);\"><td style=\"padding: 8px; font-weight: 600;\">private</td><td style=\"padding: 8px; color: #10b981;\">✓</td><td style=\"padding: 8px; color: #ef4444;\">✗</td><td style=\"padding: 8px; color: #ef4444;\">✗</td><td style=\"padding: 8px; color: #ef4444;\">✗</td></tr><tr style=\"border-bottom: 1px solid rgba(255,255,255,0.05);\"><td style=\"padding: 8px; font-weight: 600;\">default</td><td style=\"padding: 8px; color: #10b981;\">✓</td><td style=\"padding: 8px; color: #10b981;\">✓</td><td style=\"padding: 8px; color: #ef4444;\">✗</td><td style=\"padding: 8px; color: #ef4444;\">✗</td></tr><tr style=\"border-bottom: 1px solid rgba(255,255,255,0.05);\"><td style=\"padding: 8px; font-weight: 600;\">protected</td><td style=\"padding: 8px; color: #10b981;\">✓</td><td style=\"padding: 8px; color: #10b981;\">✓</td><td style=\"padding: 8px; color: #10b981;\">✓</td><td style=\"padding: 8px; color: #ef4444;\">✗</td></tr><tr style=\"border-bottom: 1px solid rgba(255,255,255,0.05);\"><td style=\"padding: 8px; font-weight: 600;\">public</td><td style=\"padding: 8px; color: #10b981;\">✓</td><td style=\"padding: 8px; color: #10b981;\">✓</td><td style=\"padding: 8px; color: #10b981;\">✓</td><td style=\"padding: 8px; color: #10b981;\">✓</td></tr></tbody></table>`
            ]
        },
        {
            heading: "7. Memory & Garbage Collection",
            items: [
                `<strong>Stack vs. Heap Memory:</strong><ul><li><strong>Stack:</strong> Stores local primitive variables and references pointing to heap memory. Fast execution, managed in LIFO call frames.</li><li><strong>Heap:</strong> Stores actual instantiated objects and arrays. Managed by JVM garbage collectors.</li></ul>`,
                `<strong>Memory Allocation Map:</strong><pre>STACK (Call frames)                 HEAP (Allocated objects)\n┌─────────────────────┐              ┌─────────────────────┐\n│ main()              │              │ Person object       │\n│ - args (ref)        │              │ - name (ref) ───────┼─┐\n│ - person (ref) ─────┼─────────────&gt;│ - age = 25          │ │\n└─────────────────────┘              └─────────────────────┘ │\n                                     ┌─────────────────────┐ │\n                                     │ String \"John\"       │&lt;┘\n                                     └─────────────────────┘</pre>`,
                `<strong>Garbage Collection & Finalizers:</strong><ul><li>Objects are eligible for Garbage Collection when they are no longer reachable from reference roots (e.g. setting <code>obj = null</code>).</li><li>Garbage Collection is request-based via <code>System.gc()</code>, but execution is determined by JVM heuristic threads.</li><li>Avoid resources leaks: use <strong>Try-With-Resources</strong> blocks (classes implementing <code>AutoCloseable</code>) to release streams.</li></ul>`
            ]
        },
        {
            heading: "8. Advanced OOP Concepts",
            items: [
                `<strong>Dynamic Method Dispatch:</strong> Runtime resolution where an overridden method is called through a parent superclass reference variable.<pre><code>class Parent { void show() { System.out.println("Parent"); } }
class Child extends Parent { @Override void show() { System.out.println("Child"); } }

Parent ref = new Child();
ref.show(); // Outputs: "Child" (resolved at runtime)</code></pre>`,
                `<strong>Covariant Return Types:</strong> Subclass methods can override parent methods and return a narrower subtype class rather than the parent's return type.<pre><code>class SuperClass { SuperClass get() { return this; } }
class SubClass extends SuperClass {
    @Override SubClass get() { return this; } // Covariant return
}</code></pre>`,
                `<strong>Nested Classes (Inner, Local, Static, Anonymous):</strong><pre><code>class Outer {
    private String val = \"Outer\";
    
    // 1. Static Nested Class
    static class StaticNested {}
    
    // 2. Member Inner Class (Non-static)
    class Inner { void print() { System.out.println(val); } }
    
    // 3. Local Inner Class (Declared inside method)
    void run() {
        class Local { void print() {} }
        Local l = new Local();
    }
    
    // 4. Anonymous Inner Class (Inline implementation)
    Runnable r = new Runnable() {
        @Override public void run() { System.out.println(\"Anonymous\"); }
    };
}</code></pre>`,
                `<strong>Generics & Wildcards (Bounded vs. Unbounded):</strong><pre><code>// Generic class with bounded parameter
class Box&lt;T extends Number&gt; {
    private T val;
    public double doubleVal() { return val.doubleValue(); }
}

// Generic Wildcards
class GenericsDemo {
    // Upper-bounded wildcard (read-only number subtype lists)
    public static double sum(List&lt;? extends Number&gt; list) {
        double s = 0.0;
        for (Number n : list) s += n.doubleValue();
        return s;
    }
    // Lower-bounded wildcard (writable integer supertype lists)
    public static void add(List&lt;? super Integer&gt; list) {
        list.add(10);
    }
}</code></pre>`,
                `<strong>Enums as Specialized Classes:</strong> Enums in Java are full classes that can have constructor parameters, instance fields, and custom methods.<pre><code>public enum Status {
    PENDING(\"P\"), COMPLETED(\"C\");
    
    private final String code;
    Status(String code) { this.code = code; } // Constructor is private
    
    public String getCode() { return code; }
}</code></pre>`
            ]
        }
    ],
    mcqs: {
        easy: [],
        medium: [],
        hard: []
    }
};
