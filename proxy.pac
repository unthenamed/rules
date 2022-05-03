function FindProxyForURL(url, host) {
	// bypass proxy for localhost
	if (host == "localhost")	{return "DIRECT";}
	if (host == "127.0.0.1")	{return "DIRECT";}

	// traffic we want to let in
	if (dnsDomainIs(host, ".example.com") ||
	    dnsDomainIs(host, ".example.net")) {
	return "DIRECT";
	}

	// else send it to our local proxy
	return "PROXY 192.168.1.149:5080;"
 }