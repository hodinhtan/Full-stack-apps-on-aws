Elastic beanstalk URL: http://fullstackapp-imageprocessing-dev.us-east-1.elasticbeanstalk.com/

Image processing:
- Status 200: 
	http://fullstackapp-imageprocessing-dev.us-east-1.elasticbeanstalk.com/filteredimage?image_url=https://upload.wikimedia.org/wikipedia/commons/b/bd/Golden_tabby_and_white_kitten_n01.jpg
- Status 400: image url empty
	http://fullstackapp-imageprocessing-dev.us-east-1.elasticbeanstalk.com/filteredimage?image_url=
- Status 400: wrong image url type 
	http://fullstackapp-imageprocessing-dev.us-east-1.elasticbeanstalk.com/filteredimage?image_url=https://github.com/udacity/cd12099-Full-Stack-Apps-AWS/blob/main/project%20starter%20code/util/util.js
- Status 500: max memory size error
	http://fullstackapp-imageprocessing-dev.us-east-1.elasticbeanstalk.com/filteredimage?image_url=https://sample-videos.com/img/Sample-jpg-image-30mb.jpg