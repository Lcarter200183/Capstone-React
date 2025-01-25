import React from "react";
import { Link } from "react-router";

export function About() {
    
    return (
        <>
        <header>
            <Link to="/home">Home |</Link>
            <Link to="/gallery">Gallery |</Link>
            <Link to="/contact">Contact |</Link>
            <Link to="/about">About |</Link>
        </header>
    <div className="alert alert-danger alert-dismissible">
        <span className="badge bg-info">Enjoy</span>
        <span className="spinner-grow text-success"></span> Check Out What I Learned <button className="btn-close" data-bs-dismiss="alert" role="alert"></button>
    </div>
    
    <main>

        <h2>About</h2>
        <hr />
        <h3>Layout Of My Project</h3>
        <h4>Home</h4>
        <p>Basic Html, Boilerplate, Bootstrap, Nav bar, Classes, Bookmarks, Inline css,</p>
        <h4>Gallery</h4>
        <p>Card with image and text, Internal Css</p>
        <h4>Contact</h4>
        <p>Submit request form, Labels, Button</p>
        <h4>About</h4>
        <P> Alert, Growing spinner, List Group, Loops, Data Type, Object, Array runFunction button Utility Function, Javascript, Radio Button</P>

        <hr />

        <h4>Amenities at Venue </h4>
        <ul className="list-group list-group-flush">
            <li className="list-group-item">Rooms</li>
            <li className="list-group-item">Artisian Food and Drinks</li>
            <li className="list-group-item">Pool</li>
            <li className="list-group-item">Catering</li>
            <li className="list-group-item">Wifi</li>
            <li className="list-group-item">Event Suppilies <span class="badge bg-info">20% off</span></li>
            <li className="list-group-item">Parking</li>
            <li className="list-group-item">Fitness Center</li>
        </ul>

        <h3>Loops</h3>

        <h4><u>do while</u></h4>

        <script>
            myCount = 0;
            do {
                myCount++;
                document.write(myCount)
                isDone = myCount === 3;
            } while (!isDone);
        </script>
        <br />
        <h4><u>"for"</u></h4>
        <script>
            for (count = 0; count = 50; count = count + 10)
                document.write(count + "<br />");
        </script>
        <br />

        <u><h4>while</h4></u>
        <script>
            myCount = 0;
            while (myCount = 100) {
                document.write(
                 myCount = myCount + 5)
            }
            
        </script>
        <br />



        <u><h4>if else</h4></u>
        <script>
            if ((result = false)) {
                document.write("x is < y")
            } else {
                document.write("x is !< y")
            }
        </script>

        <hr />

        <h3>DATA TYPE</h3>
        <u><h4>"String"</h4></u>
        <script>
            myVariable = "abc";
            result = typeof myVariable;
            document.write(result);
        </script>

        <u><h4>Number</h4></u>
        <script>
            myVariable = 777;
            result = typeof myVariable;
            document.write(result);
        </script>
        <br />

        <u><h4>Boolean</h4></u>
        <script>
            myVariable = 12 < 10;
            result = typeof myVariable;
            document.write(result);
        </script>

        <u><h4>Array</h4></u>
        <script>
            venueList = ["exterior", "interior", "event"];
            position = 2;
            document.write(venueList[0] + "<br>");
            document.write(venueList[1] + "<br>");
            document.write(venueList[2]);
        </script>


        <u><h4>Object</h4></u>
        <script>
            myVenue = {};
            myVenue.color = "blue";
            document.write(myVenue.color);
        </script>
        <br />


        <button className="btn btn-primary" id="animated-button">Yummm!</button>



        <u><h4>Our Signature Dish</h4></u>
        <main id="mainTag"></main>
        <script>
            const card1 = {};
            card1.src =
                "data:image/jpeg;base64,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";
            card1.title = "Cheesy Chicken Broccoli Bake";
            card1.description = "Easy recipe. Done in 45 minutes!";

            let card1String = '<div class="card">';
            card1String =
                card1String + '<img class="card-img-top" src="' + card1.src + '" />';
            card1String = card1String + '<div class="card body">';
            card1String =
                card1String + '<h3 class="card-title">' + card1.title + "</h3>";
            card1String = card1String + card1.description;
            card1String = card1String + "</div>";
            card1String = card1String + "</div>";
            mainTag.innerHTML = card1String;
        </script>

        <hr />

        <script>
            function runFunction1() {
                myVariable = myOutput.innerHTML;
                myOutput.innerHTML = "Thanks for coming.";
            }

            function runFunction2() {
                myOutput.innerHTML = "Hope you enjoyed my website.";
            }
        </script>
        <button onClick="runFunction1()">Click here to run Problem 1</button>
        <br />
        <button onClick="runFunction2()">Click here to run Problem 2</button>

        <div id="myOutput">Insert output here</div>


        <hr />
        <h5>Rate my Website</h5>

        <form>
            <input type="radio" id="Thumbs up" name="group 1" /><label for="Thumbs up">👍🏾</label>
            <input type="radio" id="Thumbs down" name="group 1" /><label for="Thumbs down">👎🏾</label>
            <br />
            <button className="#include boxShadow #include textShadow btn-lg btn-primary " id="mixin button">Submit</button>
        </form>
        <buttom onClick="listGroupExample()">list Group </buttom>
        <output id="outputTag"></output>
    </main>
    </>
    <footer><pre>Website created by <code>Lydia Carter</code></pre>
        </footer>
        
        );
    
}