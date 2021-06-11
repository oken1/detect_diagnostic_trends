$( document ).ready( function() {
	chrome.runtime.onMessage.addListener( ( message, sender, callback ) => {
		$.ajax( {
			url: `https://script.google.com/macros/s/AKfycbw3zEfRvuEuCwKmO9AW4co-K8FAjtaDb2vO6npD5TqCirSynk0X3VQRT3OqTMFL3JcGmg/exec`,
			dataType: 'json',
			type: 'GET',
		} )
		.done( ( data ) => {
			const searchTarget = () => {
				$( '.r-vmopo1' ).each( ( index, element ) => {
					for ( let i = 0 ; i < data.trends.length ; i++ ) {
						const span = $( element ).find( 'span:first' )

						if ( span.text() == data.trends[i] ) {
							span.prepend( '❌' )
							span.closest( '.r-vmopo1 ' ).css( { opacity: 0.5 } )
						}
					}
				} )

				setTimeout( searchTarget, 10 * 1000 )
			}

			searchTarget()
		} )
	} )
} )

