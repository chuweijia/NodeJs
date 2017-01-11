$(document).ready(function(){
								var ch = $(document.body).height();
								$(window).scroll( function() {
									if($(window).scrollTop()>500){
										$("nav").removeClass("navbar-load").addClass("navbar-default");
										$("#nav_log").addClass("nav-log");

										// $("#nav_reg").addClass("nav-reg");
										// $("#nav_ul #nav_reg a").addClass("nav-reg-a");
										$("#nav_reg").css({ "background": "rgb(113,202,82)" });
										$("#nav_reg a").css({ "color": "#ffffff"});
										// $("#nav_reg").css("color","#ffffff");

									}
									else if($(window).scrollTop()<500){
										$("nav").removeClass("navbar-default").addClass("navbar-load");
										$("#nav_log").removeClass("nav-log");
										$("#nav_reg").removeClass("nav-reg");
										$("#nav_reg").css({ "background": "transparent" });
										$("#nav_reg a").css({ "color": "red"});

									}
								});

							});
