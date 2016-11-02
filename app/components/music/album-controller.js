(function () {
    angular.module('ng-music')
        .component('album', {
            templateUrl: 'app/components/music/album.html',
            controller: AlbumController,
            controllerAs: "ac"
        })

    AlbumController.$inject = ['$stateParams', 'MusicService', "$state"]

    function AlbumController($stateParams, MusicService, $state) {
        const ac = this;
        let id = $stateParams.id;
ac.album = MusicService.getAlbumById(id)

        // you will need to utilize the $stateParams and MusicService to get the correct album by its id
        //Be sure to get the desired album on some property that you can use in the view

        //Once you get the basics built out can you modify the MusicService to use the Itunes API???
        ac.goback = function () {
    $state.go("albums")
}    
    }
} ())
