

$( "#image-switch" ).click( () => {
    if( $( "#steevie" ).attr( "src" ) == "/images/steve.gif" ) {
        $( "#steevie" ).attr( "src", "/images/steve2.gif" );
    }
    else if( $( "#steevie" ).attr( "src" ) == "/images/steve2.gif" ) {
        $( "#steevie" ).attr( "src", "/images/steve3.gif" );
    }
    else if( $( "#steevie" ).attr( "src" ) == "/images/steve3.gif" ) {
        $( "#steevie" ).attr( "src", "/images/steve4.gif" );
    }
    else if( $( "#steevie" ).attr( "src" ) == "/images/steve4.gif" ) {
        $( "#steevie" ).attr( "src", "/images/steve5.gif" );
    }
    else {
        $( "#steevie" ).attr( "src", "/images/steve.gif" );
    }
});