function make_album(artist_name:string ,album_title:string,tracks?:number){
  //created object
  //have given 3 properties to object
    let album :{artist: string , title:string , tracks?:number} = {
        artist: artist_name,
        title: album_title,

    };

    if (tracks !== undefined){
        album.tracks = tracks;
    }
    return album; 
}
/// calling three functions & creating three variables  with different values 

let ablbum1 = make_album("Anzila", "Album title 1");
let album2 = make_album ("Fatima" , "Album title 2");

//calling a make_album function with different values with third parameter 
let album3 = make_album("Emaan","Album title 3" , 10);

//printing the variables 

console.log(ablbum1);
console.log(album2);
console.log(album3);

