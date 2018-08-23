$( document ).ready(function() {
	function addElement(number) {
		$.getJSON( "js/example.json", function( data ) {
			$("#products").empty();
			for (var i=0; i <= number-1; i++) {
				if (typeof data.list[i] === 'undefined') {
						break;
				}
				if (window.matchMedia('(max-device-width: 823px)').matches) { 
					var addedItem = '<div class="product';
					if (i%2 != 0) {
						addedItem += ' next-product';
					}
				} else { 
					var addedItem = '<div class="product';
					if (i%4 != 0) {
						addedItem += ' next-product';
					}
				}
				var discount = parseFloat(data.list[i].price.gross.base_float) - parseFloat(data.list[i].price.gross.promo_float);
				addedItem += '"> \
					<div class="product-top-bar"> \
						<div class="product-top-bar-left"> \
							<img src="images/cart.png" alt="cart"> \
							<span class="product-arts-number"> \
								'+data.list[i].availability.name+' \
							</span> \
						</div> \
						<div class="product-top-bar-right"> \
							<span class="product-discount-text"> \
								oszczędzasz: \
							</span> \
							<span class="product-discount-number"> \
								'+discount+' \
							</span> \
							<span class="product-discount-currency"> \
								zł \
							</span> \
						</div> \
					</div> \
					<div class="product-image"> \
						<img src="'+'https://outletmeblowy.pl/environment/cache/images/300_300_productGFX_'+data.list[i].main_image+'.jpg'+'" alt="product"> \
					</div> \
					<div class="product-bottom-bar"> \
						<div class="product-price"> \
							<span class="product-low-price"> \
								'+data.list[i].price.gross.promo_float+' \
							</span> \
							<span class="product-low-price-currency"> \
								zł \
							</span> \
							<span class="product-high-price"> \
								<s>'+data.list[i].price.gross.base_float+'</s> \
							</span>	\
							<span class="product-high-price-currency"> \
								<s>zł</s> \
							</span> \
						</div> \
						<div class="product-name"> \
							<span class="product-name-text"> \
								'+data.list[i].name+' \
							</span> \
						</div> \
						<div class="group-name"> \
							<span class="group-name-text"> \
								'+data.list[i].producer.name+' \
							</span> \
						</div> \
					</div> \
				</div> \
			</div>';
				$("#products").append(addedItem);	
			}
				
		});
	}
	
	$(document).on("click","#2-products",function() {
		addElement(2);
	});
	
	$(document).on("click","#4-products",function() {
		addElement(4);
	});
	
	$(document).on("click","#8-products",function() {
		addElement(8);
	});
	
	$("#4-products").click();
	

});