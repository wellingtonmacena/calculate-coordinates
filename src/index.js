class calculateDistance {
    degreesToRadians(degree) {
        return degree * (Math.PI / 180);
    }

    fromCoordinatesReturningKM(centerCoordinates, extremeCoordinates) {

        const RADIUS = 6371;

        const [centerLatitude, centerLongitude] = centerCoordinates;
        const [extremeLatitude, extremeLongitude] = extremeCoordinates;

        const deltaLatitude = this.degreesToRadians(extremeLatitude - centerLatitude);
        const deltaLongitude = this.degreesToRadians(extremeLongitude - centerLongitude);

        const circumference = Math.sin(deltaLatitude / 2) *
            Math.sin(deltaLatitude / 2) +
            Math.cos(this.degreesToRadians(centerLatitude)) *
            Math.cos(this.degreesToRadians(extremeLatitude)) *
            Math.sin(deltaLongitude / 2) *
            Math.sin(deltaLongitude / 2);


        const center = 2 *
            Math.atan2(Math.sqrt(circumference), Math.sqrt(1 - circumference));
        const distanceInKM = RADIUS * center;

        return distanceInKM;
    }

    fromCoordinatesReturningM(centerCoordinates, extremeCoordinates){
        return this.fromCoordinatesReturningKM(centerCoordinates, extremeCoordinates) * 1000;
    }   
}

module.export = calculateDistance;