# Tips and tricks for being on-call

Post in a general channel ASAP, to keep communication in a central place.

For finding causes of latency issues, in Datadog:
Traces -> Set the minimum latency higher than a regular amount
This will often show you the 'interesting' traces, and what they're trying to request

In Datadog's APM, there's an `operation` dropdown at the top left for a service. This can often change the data shown greatly.

#datadog
#oncall
#ops