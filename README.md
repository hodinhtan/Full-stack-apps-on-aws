# udacity-images-processing-mcs


## Elastic beanstalk URL: 
  http://tanho-imageprocessing.us-east-1.elasticbeanstalk.com/

# Image processing:
- Status 200: 
	http://tanho-imageprocessing.us-east-1.elasticbeanstalk.com/filteredimage?image_url=https://upload.wikimedia.org/wikipedia/commons/b/bd/Golden_tabby_and_white_kitten_n01.jpg
- Status 400: image url empty
	http://tanho-imageprocessing.us-east-1.elasticbeanstalk.com/filteredimage?image_url=
- Status 400: wrong image url type 
	http://tanho-imageprocessing.us-east-1.elasticbeanstalk.com/filteredimage?image_url=https://github.com/udacity/cd12099-Full-Stack-Apps-AWS/blob/main/project%20starter%20code/util/util.js