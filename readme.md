# How to add overrides
Overrides are the visual properties that we allow Helios clients to change. Follow these steps to add new overrides:

## Add input to sidebar
1. Duplicate an input wrapper
2. Set the starting value of the input
3. Configure `onchange` function

## Create a code target
1. In `code-example` duplicate a `key-value-pair` div
2. Rename the ID to match your new override's name
3. Set the starting value. Make sure to include `"` and `,`.

## Add function to input-functions.js
1. Duplicate an existing funciton. If your new override is a color, duplicate an existing color fuction which will check for transparent values.
2. Rename the new function
3. Rename `codeTarget` to match the ID of your code target you created previously
4. Configure the CSS value that will be overriden. 

