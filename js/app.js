var app = angular.module("app",['ui.router', 'ct.ui.router.extras']);

app.config(function($stateProvider, $urlRouterProvider, $stickyStateProvider){ 
	//$stickyStateProvider.enableDebug(true);

	$urlRouterProvider.otherwise("/")

	$stateProvider
	.state('root', {
		url: "/",
		views: {
			"features-view@": { templateUrl: "features-panels" },
			"pricing-view@": { templateUrl: "pricing-panels" }
		},
		//deepStateRedirect: true,
    	//sticky: true
	})

	.state('root.features', {
		url: "features",
		views: {
			"features-view@": { 
				templateUrl: "features-panels"				
			},
			"features-details-view@": { }
		},
		onEnter: function(){
			//var options = { speed: 100, easing: 'easeOutCubic',updateURL: false, offset: 0};
			//smoothScroll.animateScroll( null, '#features', options );
		},
		//sticky: true
	})

	.state('root.feature-details-01', {
		url: "feature-01",
		views: {
			"features-details-view@": { templateUrl: "feature-details-01" }
		},
		onEnter: function(){
			// var options = { speed: 100, easing: 'easeOutCubic',updateURL: false, offset: 0};
			// smoothScroll.animateScroll( null, '#features-details', options );
		},
		//sticky: true
	})

	.state('root.feature-details-02', {
		url: "feature-02",
		views: {
			"features-details-view@": { templateUrl: "feature-details-02" }
		},
		onEnter: function(){
			// var options = { speed: 100, easing: 'easeOutCubic',updateURL: false, offset: 0};
			// smoothScroll.animateScroll( null, '#features-details', options );
		},
		//sticky: true
	})

	.state('root.feature-details-03', {
		url: "feature-03",
		views: {
			"features-details-view@": { templateUrl: "feature-details-03" }
		},
		onEnter: function(){
			// var options = { speed: 100, easing: 'easeOutCubic',updateURL: false, offset: 0};
			// smoothScroll.animateScroll( null, '#features-details', options );
		},
		//sticky: true
	})

	.state('root.feature-details-04', {
		url: "feature-04",
		views: {
			"features-details-view@": { templateUrl: "feature-details-04" }
		},
		onEnter: function(){
			// var options = { speed: 100, easing: 'easeOutCubic',updateURL: false, offset: 0};
			// smoothScroll.animateScroll( null, '#features-details', options );
		},
		//sticky: true
	})

	.state('root.pricing', {
		url: "pricing",
		views: {
			"pricing-view@": { templateUrl: "pricing-panels" },
			"pricing-details-view@": { }
		},
		onEnter: function(){
			// var options = { speed: 100, easing: 'easeOutCubic',updateURL: false, offset: 0};
			// smoothScroll.animateScroll( null, '#pricing', options );
		},
		//sticky: true
	})

	.state('root.pricing-details-01', {
		url: "pricing-01",
		views: {
			"pricing-details-view@": { templateUrl: "pricing-details-01" }
		},
		onEnter: function(){
			// var options = { speed: 100, easing: 'easeOutCubic',updateURL: false, offset: 0};
			// smoothScroll.animateScroll( null, '#pricing-detail', options );
		},
		//sticky: true
	})

	.state('root.pricing-details-02', {
		url: "pricing-02",
		views: {
			"pricing-details-view@": { templateUrl: "pricing-details-02" }
		},
		onEnter: function(){
			// var options = { speed: 100, easing: 'easeOutCubic',updateURL: false, offset: 0};
			// smoothScroll.animateScroll( null, '#pricing-detail', options );
		},
		//sticky: true
	})

	.state('root.pricing-details-03', {
		url: "pricing-03",
		views: {
			"pricing-details-view@": { templateUrl: "pricing-details-03" }
		},
		onEnter: function(){
			// var options = { speed: 100, easing: 'easeOutCubic',updateURL: false, offset: 0};
			// smoothScroll.animateScroll( null, '#pricing-detail', options );
		},
		//sticky: true
	})

	.state('root.pricing-details-04', {
		url: "pricing-04",
		views: {
			"pricing-details-view@": { templateUrl: "pricing-details-04" }
		},
		onEnter: function(){
			// var options = { speed: 100, easing: 'easeOutCubic',updateURL: false, offset: 0};
			// smoothScroll.animateScroll( null, '#pricing-detail', options );
		},
		//sticky: true
	})

	.state('root.pricing-details-05', {
		url: "pricing-05",
		views: {
			"pricing-details-view@": { templateUrl: "pricing-details-05" }
		},
		onEnter: function(){
			// var options = { speed: 100, easing: 'easeOutCubic',updateURL: false, offset: 0};
			// smoothScroll.animateScroll( null, '#pricing-detail', options );
		},
		//sticky: true
	})
});

app.run(function ($rootScope, $state, $window, $timeout) {
	$rootScope.$state = $state;
	$rootScope.$on("$stateChangeSuccess", function() {
		//console.log($state.current.url);

		var options = { speed: 100, easing: 'easeOutCubic',updateURL: false, offset: 0};
		if($state.current.url === "features"){
			smoothScroll.animateScroll( null, '#features', options );
		}
		if($state.current.url === "feature-01"){
			smoothScroll.animateScroll( null, '#features-details', options );
		}
		if($state.current.url === "feature-02"){
			smoothScroll.animateScroll( null, '#features-details', options );
		}
		if($state.current.url === "feature-03"){
			smoothScroll.animateScroll( null, '#features-details', options );
		}
		if($state.current.url === "feature-04"){
			smoothScroll.animateScroll( null, '#features-details', options );
		}
		if($state.current.url === "pricing"){
			smoothScroll.animateScroll( null, '#pricing', options );
		}
		if($state.current.url === "pricing-01"){
			$timeout(function() {
				smoothScroll.animateScroll( null, '#pricing-details', options );
			}, 10);
		}
		if($state.current.url === "pricing-02"){
			$timeout(function() {
				smoothScroll.animateScroll( null, '#pricing-details', options );
			}, 10);
		}
		if($state.current.url === "pricing-03"){
			$timeout(function() {
				smoothScroll.animateScroll( null, '#pricing-details', options );
			}, 10);
		}
		if($state.current.url === "pricing-04"){
			$timeout(function() {
				smoothScroll.animateScroll( null, '#pricing-details', options );
			}, 10);
		}
		if($state.current.url === "pricing-05"){
			$timeout(function() {
				smoothScroll.animateScroll( null, '#pricing-details', options );
			}, 10);
		}
	});
});