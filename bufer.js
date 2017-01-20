    buf = new Buffer(256);  
    len = buf.write("Simply Easy Leasdddddddddddddddddddddddarning");  
    console.log("Octets written : "+  len);  


    console.log( buf.toString(undefined));