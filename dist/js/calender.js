

function start() {
    // 2. Initialize the JavaScript client library.
    gapi.client.init({
        'apiKey': '${ api_key }',
        // Your API key will be automatically added to the Discovery Document URLs.
        'discoveryDocs': ['https://www.googleapis.com/calendar/v3/calendars/events/list/'],
        // clientId and scope are optional if auth is not required.
        'clientId': '${client_id}',
        'scope': 'https://www.googleapis.com/auth/calendar.readonly',
    }).then(function () {
        // 3. Initialize and make the API request.
        return gapi.client.people.people.get({
            'resourceName': 'people/me',
            'requestMask.includeField': 'person.names'
        });
    }).then(function (response) {
        console.log(response.result);
    }, function (reason) {
        console.log('Error: ' + reason.result.error.message);
    });
};
// 1. Load the JavaScript client library.

gapi.load('client', start);