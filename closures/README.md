Suppose, you want to count the number of times user clicked a button on a webpage.
For this, you are triggering a function on onclick event of button to update the count of the variable

<button onclick="updateClickCount()">click me</button>  

Now there could be many approaches like:
1) You could use a global variable, and a function to increase the counter:

var counter = 0;

function updateClickCount() {
    ++counter;
    // do something with counter
}

But, the pitfall is that any script on the page can change the counter, without calling updateClickCount().

2) Now, You might be thinking of declaring the variable inside the function:

function updateClickCount() {
    var counter = 0;
    ++counter;
    // do something with counter
}

But, Hey! Every time updateClickCount() function is called, the counter is set to 1 again.

3) Thinking about Nested functions?

Nested functions have access to the scope "above" them.
In this example, the inner function updateClickCount() has access to the counter variable in the parent function countWrapper()

function countWrapper() {
    var counter = 0;
    function updateClickCount() {
    ++counter;
    // do something with counter
    }
    updateClickCount();    
    return counter; 
}

This could have solved the counter dilemma, if you could reach the updateClickCount() function from the outside and you also need to find a way to execute counter = 0 only once not everytime.

4) Closure to the rescue! (self-invoking function):

var updateClickCount=(function(){
    var counter=0;

    return function(){
     ++counter;
     // do something with counter
    }
})();

The self-invoking function only runs once. It sets the counter to zero (0), and returns a function expression.

This way updateClickCount becomes a function. The "wonderful" part is that it can access the counter in the parent scope.

This is called a JavaScript closure. It makes it possible for a function to have "private" variables.

The counter is protected by the scope of the anonymous function, and can only be changed using the add function!

More Lively Example On Closure:
------------------------------------
<script>
        var updateClickCount=(function(){
    	var counter=0;
    
    	return function(){
    	++counter;
    	 document.getElementById("spnCount").innerHTML=counter;
    	}
      })();
    </script>

    <html>
	 <button onclick="updateClickCount()">click me</button>
	  <div> you've clicked 
		<span id="spnCount"> 0 </span> times!
	 </div>
    </html>