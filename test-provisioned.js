import http from 'k6/http';
import { randomString } from 'https://jslib.k6.io/k6-utils/1.2.0/index.js';
import { check, sleep } from 'k6';
export const options = {
    vus: 1000,
    duration: '10m',
};

//export const options = {
//    stages: [
//        { duration: '5m', target: 50 },
//        { duration: '5m', target: 100 },
//        { duration: '5m', target: 150 },
//        { duration: '5m', target: 200 },
//        { duration: '5m', target: 250 },
//        { duration: '5m', target: 200 },
//        { duration: '5m', target: 150 },
//        { duration: '5m', target: 100 },
//        { duration: '5m', target: 50 },
//    ],
//};

export default function () {
    const payload = JSON.stringify({
        Description: randomString(255),
        Title: randomString(32),
    });
    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    const provitioned = http.post('https://gk49j4kqm6.execute-api.us-east-2.amazonaws.com/Prod/provisioned-posts/', payload, params);
    check(provitioned, {
        'status 200': (r) => r.status === 200,
        'duration was <= 50ms': (r) => r.timings.duration <= 50,
        'duration was > 50ms and <= 100ms': (r) => r.timings.duration > 50 && r.timings.duration <= 100,
        'duration was > 100ms and <= 150ms': (r) => r.timings.duration > 100 && r.timings.duration <= 150,
        'duration was > 150ms and <= 200ms': (r) => r.timings.duration > 150 && r.timings.duration <= 200,
        'duration was > 200ms and <= 250ms': (r) => r.timings.duration > 200 && r.timings.duration <= 250,
        'duration was > 250ms and <= 300ms': (r) => r.timings.duration > 250 && r.timings.duration <= 300,
        'duration was > 300ms and <= 350ms': (r) => r.timings.duration > 300 && r.timings.duration <= 350,
        'duration was > 350ms and <= 400ms': (r) => r.timings.duration > 350 && r.timings.duration <= 400,
        'duration was > 400ms and <= 450ms': (r) => r.timings.duration > 400 && r.timings.duration <= 450,
        'duration was > 450ms and <= 500ms': (r) => r.timings.duration > 450 && r.timings.duration <= 500,
        'duration was > 500ms': (r) => r.timings.duration > 500
    });
}