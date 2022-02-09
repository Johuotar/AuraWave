// view.js - the presentation of files
// Import the filesystem module
const fs = require("fs");
  
let directory_name = "public";
  
// Open the directory
let publicDir = fs.opendirSync(directory_name);

// Get the files present in the directory
console.log("Files in public:");
  
let filesLeft = true;
while (filesLeft) {
  // Read a file as fs.Dirent object
  let fileDirent = publicDir.readSync();
  
  // If readSync() does not return null print name
  if (fileDirent != null)
    console.log("Name:", fileDirent.name);
  
  // If the readSync() returns null exit loop
  else filesLeft = false;
}
