import React,{useEffect} from 'react'
import { Image, Box, Link,chakra,Flex,SimpleGrid, Center} from '@chakra-ui/react'

import AOS from 'aos';
import 'aos/dist/aos.css';
const Availablity = () => {

	useEffect(() =>{
		AOS.init({duration: 1000})
		
		},[])

  return (
    <div className="gray-bg padding ptb-xs-40">
			<div className="container">
				<div className="row pb-30 text-center" data-aos="fade-down">
					<div className="col-sm-12 mb-20">
						<h2>Investment Plans of the Company</h2>
						
					</div>
				</div>
				<div className="row">
					{/* <div className="col-sm-4" data-aos="fade-up">
						<div className="text__block dark-color">
							<div className="about__block-box">
								<div className='topIconContainer'>
								<div className="service_icon1">
									<img src='assets/images/tokenizaiton.png' className='value_proposition'/>
									

								</div>
								<div className="service_details1">
									<h3>
									Introduction to Tokenization
</h3>
								</div>
								</div>
								<div className="service_content">
									<p>
									Our company plans to introduce tokens that represent company shares. 
									Each individual purchasing these tokens becomes a participant in the profits generated by the company. 
									50% of all company shares will be reflected through tokens
									 
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-sm-4" data-aos="fade-down">
						<div className="text__block dark-color">
							<div className="about__block-box">
							<div className='topIconContainer'>
								<div className="service_icon1">
								<img src='assets/images/technological.png' className='value_proposition'/>
									
								</div>
								<div className="service_details1">
									<h3>Technological Infrastructure</h3>
								</div>
								</div>
								<div className="service_content">
									<p>
									In the initial phase, we will launch a website with a wallet, 
									and our tokens will be listed on platforms such as CoinMarketCap and CoinGecko. Additionally,
									 we will create our own wallet on our website, enabling storage, 
									value tracking, and profit generation from held tokens.</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-sm-4" data-aos="fade-up">
						<div className="text__block dark-color">
							<div className="about__block-box">
							<div className='topIconContainer'>
								<div className="service_icon1">
								<img src='assets/images/development_fund.png' className='value_proposition'/>
									
							
								</div>
								<div className="service_details1">
									<h3>Development <br/> Funding
</h3>
								</div>
								</div>
								<div className="service_content">
									<p>
									All proceeds from token sales will be allocated to platform development and the purchase of assets on which subsequent projects will be based.
									 Our tokens differ from standard stablecoins, 
									as their value will increase with the associated asset, making investments more attractive.
									</p>
								</div>
							</div>
						</div>
					</div>


					<div className="col-sm-4" data-aos="fade-down">
						<div className="text__block dark-color">
							<div className="about__block-box">
							<div className='topIconContainer'>
								<div className="service_icon1">
								<img src='assets/images/assetsinvestment.png' className='value_proposition'/>
									
								</div>
								<div className="service_details1">
									<h3>Investments<br/>
										 in Assets

</h3>
								</div>
								</div>
								<div className="service_content">
									<p>
									
									Managing the acquired funds, the company plans to invest in diverse income-generating assets.
									 Assets will be available for purchase through tokenization,
									 allowing investors to participate in real estate, lands, hotels, and other projects.


									</p>
								</div>
							</div>
						</div>
					</div>


					<div className="col-sm-4" data-aos="fade-up">
						<div className="text__block dark-color">
							<div className="about__block-box">
							<div className='topIconContainer'>
								<div className="service_icon1">
								<img src='assets/images/assettokenization.png' className='value_proposition'/>
								</div>
								<div className="service_details1">
									<h3>Asset <br/>Tokenization

</h3>
								</div>
								</div>
								<div className="service_content">
									<p>
									
									Our platform will enable the tokenization of assets,
									 allowing users to acquire shares in various investments. Tokens,
									  such as "Real Golds," will be used to pay commissions from the profits earned by the company and will be available on our platform.


									</p>
								</div>
							</div>
						</div>
					</div>


					<div className="col-sm-4" data-aos="fade-up">
						<div className="text__block dark-color">
							<div className="about__block-box">
							<div className='topIconContainer'>
								<div className="service_icon1">
								<img src='assets/images/communitygroup.png' className='value_proposition'/>	
									
								</div>
								<div className="service_details1">
									<h3>Community Decisions and Investment

</h3>
								</div>
								</div>
								<div className="service_content">
									<p>
									
									We are building a community that can propose asset tokenization and vote on decisions related to a particular asset (sale, rental, etc.). 
									Our company will manage tokenization, the sale of tokens associated with a specific asset,
									


									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="col-sm-4" data-aos="fade-up">
						<div className="text__block dark-color">
							<div className="about__block-box">
								<div className="service_icon1">
									<i className="hi-icon fa fa-file-text-o"></i>
								</div>
								<div className="service_details1">
									<h3>Real Invest <br/> Company


</h3>
								</div>
								<div className="service_content">
									<p>
									
									Real Invest Company aims to acquire and manage existing companies using tokenization. 
									Investment terms will determine the percentage share in profits, 
									with no restrictions on the type of assets.


									</p>
								</div>
							</div>
						</div>
					</div>


					<div className="col-sm-4" data-aos="fade-down">
						<div className="text__block dark-color">
							<div className="about__block-box">
							<div className='topIconContainer'>
								<div className="service_icon1">
								<img src='assets/images/expantion.png' className='value_proposition'/>	
									
								</div>
								<div className="service_details1">
									<h3>International Expansion



</h3>
								</div>
								</div>
								<div className="service_content">
									<p>
									
									Over time, we plan to expand into international markets by establishing branches in different countries.



									</p>
								</div>
							</div>
						</div>
					</div> */}



{/* 
<SimpleGrid columns={4}  py={6} ml={10}
            minChildWidth="250px"
            spacing={10}
            flexWrap="wrap"
            
  
>
  <Box
    w="full"
    maxW="sm"
    mx="auto"
    px={4}
    py={3}
    bg="white"
    _dark={{
      bg: "gray.800",
    }}
    shadow="md"
    rounded="md"
  >
    <Flex justifyContent="space-between" alignItems="center">
      <chakra.span
        fontSize="sm"
        color="gray.800"
        _dark={{
          color: "gray.400",
        }}
      >
        
      </chakra.span>

    </Flex>

    <Box>
	<Flex>
	<Image
        w={20}
        h={20}
        fit="contain"
		position="center"
		mt={-4}
        rounded="full"
        borderStyle="solid"
       
        color="brand.500"
        _dark={{
          color: "brand.400",
        }}
        alt="Testimonial avatar"
		src='assets/images/tokenizaiton.png'
      />
      <chakra.h1
        fontSize="lg"
        fontWeight="bold"
        mt={2}
        color="gray.800"
        _dark={{
          color: "white",
        }}
      >
        Introduction to Tokenization

      </chakra.h1>
	 
	  </Flex>
      <chakra.p
        fontSize="sm"
        mt={2}
        color="gray.600"
        _dark={{
          color: "gray.300",
        }}
      >
      
	  Our company plans to introduce tokens that represent company shares.
	  Each individual purchasing these tokens becomes a participant in the profits generated by the company. 
	  50% of all company shares will be reflected through tokens
      </chakra.p>
    </Box>

    <Box>
      <Flex
        alignItems="center"
        mt={2}
        color="gray.700"
        _dark={{
          color: "gray.200",
        }}
      >
       
        
       
      </Flex>

      <Flex alignItems="center" justifyContent="center" mt={4}>
        <Link
          mr={2}
          color="gray.800"
          _dark={{
            color: "gray.400",
          }}
          _hover={{
            color: "gray.700",
            _dark: {
              color: "gray.300",
            },
          }}
          cursor="pointer"
        >
          
        </Link>

        <Link
          mr={2}
          color="gray.800"
          _dark={{
            color: "gray.400",
          }}
          _hover={{
            color: "gray.700",
            _dark: {
              color: "gray.300",
            },
          }}
          cursor="pointer"
        >
          
        </Link>
      </Flex>
    </Box>
  </Box>

  <Box
    w="full"
    maxW="sm"
    mx="auto"
    px={4}
    py={3}
    bg="white"
    _dark={{
      bg: "gray.800",
    }}
    shadow="md"
    rounded="md"
  >
    <Flex justifyContent="space-between" alignItems="center">
      <chakra.span
        fontSize="sm"
        color="gray.800"
        _dark={{
          color: "gray.400",
        }}
      >
        
      </chakra.span>

    </Flex>

    <Box>
	<Flex>
	<Image
        w={20}
        h={20}
        fit="contain"
		position="center"
		mt={-4}
        rounded="full"
        borderStyle="solid"
       
        color="brand.500"
        _dark={{
          color: "brand.400",
        }}
        alt="Testimonial avatar"
		src='assets/images/technological.png'
      />
      <chakra.h1
        fontSize="lg"
        fontWeight="bold"
        mt={2}
        color="gray.800"
        _dark={{
          color: "white",
        }}
      >
        Technological Infrastructure

      </chakra.h1>
	 
	  </Flex>
      <chakra.p
        fontSize="sm"
        mt={2}
        color="gray.600"
        _dark={{
          color: "gray.300",
        }}
      >
      
	  In the initial phase, we will launch a website with a wallet,
	  and our tokens will be listed on platforms such as CoinMarketCap and CoinGecko. Additionally,
	  we will create our own wallet on our website, enabling storage, value tracking, and profit generation from held tokens.

      </chakra.p>
    </Box>

    <Box>
      <Flex
        alignItems="center"
        mt={2}
        color="gray.700"
        _dark={{
          color: "gray.200",
        }}
      >
       
        
       
      </Flex>

      <Flex alignItems="center" justifyContent="center" mt={4}>
        <Link
          mr={2}
          color="gray.800"
          _dark={{
            color: "gray.400",
          }}
          _hover={{
            color: "gray.700",
            _dark: {
              color: "gray.300",
            },
          }}
          cursor="pointer"
        >
          
        </Link>

        <Link
          mr={2}
          color="gray.800"
          _dark={{
            color: "gray.400",
          }}
          _hover={{
            color: "gray.700",
            _dark: {
              color: "gray.300",
            },
          }}
          cursor="pointer"
        >
          
        </Link>
      </Flex>
    </Box>
  </Box>

  <Box
    w="full"
    maxW="sm"
    mx="auto"
    px={4}
    py={3}
    bg="white"
    _dark={{
      bg: "gray.800",
    }}
    shadow="md"
    rounded="md"
  >
    <Flex justifyContent="space-between" alignItems="center">
      <chakra.span
        fontSize="sm"
        color="gray.800"
        _dark={{
          color: "gray.400",
        }}
      >
        
      </chakra.span>

    </Flex>

    <Box>
	<Flex>
	<Image
        w={20}
        h={20}
        fit="contain"
		position="center"
		mt={-4}
        rounded="full"
        borderStyle="solid"
       
        color="brand.500"
        _dark={{
          color: "brand.400",
        }}
        alt="Testimonial avatar"
		src='assets/images/development_fund.png'
      />
      <chakra.h1
        fontSize="lg"
        fontWeight="bold"
        mt={2}
        color="gray.800"
        _dark={{
          color: "white",
        }}
      >
        Development Funding


      </chakra.h1>
	 
	  </Flex>
      <chakra.p
        fontSize="sm"
        mt={2}
        color="gray.600"
        _dark={{
          color: "gray.300",
        }}
      >
      
	  
All proceeds from token sales will be allocated to platform development and the purchase of assets on which subsequent projects will be based. 
Our tokens differ from standard stablecoins, as their value will increase with the associated asset, making investments more attractive.

      </chakra.p>
    </Box>

    <Box>
      <Flex
        alignItems="center"
        mt={2}
        color="gray.700"
        _dark={{
          color: "gray.200",
        }}
      >
       
        
       
      </Flex>

      <Flex alignItems="center" justifyContent="center" mt={4}>
        <Link
          mr={2}
          color="gray.800"
          _dark={{
            color: "gray.400",
          }}
          _hover={{
            color: "gray.700",
            _dark: {
              color: "gray.300",
            },
          }}
          cursor="pointer"
        >
          
        </Link>

        <Link
          mr={2}
          color="gray.800"
          _dark={{
            color: "gray.400",
          }}
          _hover={{
            color: "gray.700",
            _dark: {
              color: "gray.300",
            },
          }}
          cursor="pointer"
        >
          
        </Link>
      </Flex>
    </Box>
  </Box>

  <Box
    w="full"
    maxW="sm"
    mx="auto"
    px={4}
    py={3}
    bg="white"
    _dark={{
      bg: "gray.800",
    }}
    shadow="md"
    rounded="md"
  >
    <Flex justifyContent="space-between" alignItems="center">
      <chakra.span
        fontSize="sm"
        color="gray.800"
        _dark={{
          color: "gray.400",
        }}
      >
        
      </chakra.span>

    </Flex>

    <Box>
	<Flex>
	<Image
        w={20}
        h={20}
        fit="contain"
		position="center"
		mt={-4}
        rounded="full"
        borderStyle="solid"
       
        color="brand.500"
        _dark={{
          color: "brand.400",
        }}
        alt="Testimonial avatar"
		src='assets/images/assetsinvestment.png'
      />
      <chakra.h1
        fontSize="lg"
        fontWeight="bold"
        mt={2}
        color="gray.800"
        _dark={{
          color: "white",
        }}
      >
       Investments in Assets


      </chakra.h1>
	 
	  </Flex>
      <chakra.p
        fontSize="sm"
        mt={2}
        color="gray.600"
        _dark={{
          color: "gray.300",
        }}
      >
      
	  Managing the acquired funds, the company plans to invest in diverse income-generating assets.
	  Assets will be available for purchase through tokenization,
	  allowing investors to participate in real estate, lands, hotels, and other projects.
      </chakra.p>
    </Box>

    <Box>
      <Flex
        alignItems="center"
        mt={2}
        color="gray.700"
        _dark={{
          color: "gray.200",
        }}
      >
       
        
       
      </Flex>

      <Flex alignItems="center" justifyContent="center" mt={4}>
        <Link
          mr={2}
          color="gray.800"
          _dark={{
            color: "gray.400",
          }}
          _hover={{
            color: "gray.700",
            _dark: {
              color: "gray.300",
            },
          }}
          cursor="pointer"
        >
          
        </Link>

        <Link
          mr={2}
          color="gray.800"
          _dark={{
            color: "gray.400",
          }}
          _hover={{
            color: "gray.700",
            _dark: {
              color: "gray.300",
            },
          }}
          cursor="pointer"
        >
          
        </Link>
      </Flex>
    </Box>
  </Box>

  <Box
    w="full"
    maxW="sm"
    mx="auto"
    px={4}
    py={3}
    bg="white"
    _dark={{
      bg: "gray.800",
    }}
    shadow="md"
    rounded="md"
  >
    <Flex justifyContent="space-between" alignItems="center">
      <chakra.span
        fontSize="sm"
        color="gray.800"
        _dark={{
          color: "gray.400",
        }}
      >
        
      </chakra.span>

    </Flex>

    <Box>
	<Flex>
	<Image
        w={20}
        h={20}
        fit="contain"
		position="center"
		mt={-4}
        rounded="full"
        borderStyle="solid"
       
        color="brand.500"
        _dark={{
          color: "brand.400",
        }}
        alt="Testimonial avatar"
        src='assets/images/assettokenization.png'
      />
      <chakra.h1
        fontSize="lg"
        fontWeight="bold"
        mt={2}
        color="gray.800"
        _dark={{
          color: "white",
        }}
      >
       Asset Tokenization


      </chakra.h1>
	 
	  </Flex>
      <chakra.p
        fontSize="sm"
        mt={2}
        color="gray.600"
        _dark={{
          color: "gray.300",
        }}
      >
      
      Our platform will enable the tokenization of assets, allowing users to acquire shares in various investments. 
      Tokens, such as "Real Golds,"
       will be used to pay commissions from the profits earned by the company and will be available on our platform.
      </chakra.p>
    </Box>

    <Box>
      <Flex
        alignItems="center"
        mt={2}
        color="gray.700"
        _dark={{
          color: "gray.200",
        }}
      >
       
        
       
      </Flex>

      <Flex alignItems="center" justifyContent="center" mt={4}>
        <Link
          mr={2}
          color="gray.800"
          _dark={{
            color: "gray.400",
          }}
          _hover={{
            color: "gray.700",
            _dark: {
              color: "gray.300",
            },
          }}
          cursor="pointer"
        >
          
        </Link>

        <Link
          mr={2}
          color="gray.800"
          _dark={{
            color: "gray.400",
          }}
          _hover={{
            color: "gray.700",
            _dark: {
              color: "gray.300",
            },
          }}
          cursor="pointer"
        >
          
        </Link>
      </Flex>
    </Box>
  </Box>

  <Box
    w="full"
    maxW="sm"
    mx="auto"
    px={4}
    py={3}
    bg="white"
    _dark={{
      bg: "gray.800",
    }}
    shadow="md"
    rounded="md"
  >
    <Flex justifyContent="space-between" alignItems="center">
      <chakra.span
        fontSize="sm"
        color="gray.800"
        _dark={{
          color: "gray.400",
        }}
      >
        
      </chakra.span>

    </Flex>

    <Box>
	<Flex>
	<Image
        w={20}
        h={20}
        fit="contain"
		position="center"
		mt={-4}
        rounded="full"
        borderStyle="solid"
       
        color="brand.500"
        _dark={{
          color: "brand.400",
        }}
        alt="Testimonial avatar"
        src='assets/images/communitygroup.png' 
      />
      <chakra.h1
        fontSize="lg"
        fontWeight="bold"
        mt={2}
        color="gray.800"
        _dark={{
          color: "white",
        }}
      >
       Community Decisions and Investment Management


      </chakra.h1>
	 
	  </Flex>
      <chakra.p
        fontSize="sm"
        mt={2}
        color="gray.600"
        _dark={{
          color: "gray.300",
        }}
      >
      
      We are building a community that can propose asset tokenization and vote on decisions related to a particular asset (sale, rental, etc.). Our company will manage tokenization,
       the sale of tokens associated with a specific asset, and profits will be evenly distributed among token holders.
      </chakra.p>
    </Box>

    <Box>
      <Flex
        alignItems="center"
        mt={2}
        color="gray.700"
        _dark={{
          color: "gray.200",
        }}
      >
       
        
       
      </Flex>

      <Flex alignItems="center" justifyContent="center" mt={4}>
        <Link
          mr={2}
          color="gray.800"
          _dark={{
            color: "gray.400",
          }}
          _hover={{
            color: "gray.700",
            _dark: {
              color: "gray.300",
            },
          }}
          cursor="pointer"
        >
          
        </Link>

        <Link
          mr={2}
          color="gray.800"
          _dark={{
            color: "gray.400",
          }}
          _hover={{
            color: "gray.700",
            _dark: {
              color: "gray.300",
            },
          }}
          cursor="pointer"
        >
          
        </Link>
      </Flex>
    </Box>
  </Box>

  <Box
    w="full"
    maxW="sm"
    mx="auto"
    px={4}
    py={3}
    bg="white"
    _dark={{
      bg: "gray.800",
    }}
    shadow="md"
    rounded="md"
  >
    <Flex justifyContent="space-between" alignItems="center">
      <chakra.span
        fontSize="sm"
        color="gray.800"
        _dark={{
          color: "gray.400",
        }}
      >
        
      </chakra.span>

    </Flex>

    <Box>
	<Flex>
	<Image
        w={20}
        h={20}
        fit="contain"
		position="center"
		mt={-4}
        rounded="full"
        borderStyle="solid"
       
        color="brand.500"
        _dark={{
          color: "brand.400",
        }}
        alt="Testimonial avatar"
        src='assets/images/expantion.png' 
      />
      <chakra.h1
        fontSize="lg"
        fontWeight="bold"
        mt={2}
        color="gray.800"
        _dark={{
          color: "white",
        }}
      >
       International Expansion


      </chakra.h1>
	 
	  </Flex>
      <chakra.p
        fontSize="sm"
        mt={2}
        color="gray.600"
        _dark={{
          color: "gray.300",
        }}
      >
      
      Over time, we plan to expand into international markets by establishing branches in different countries.
      </chakra.p>
    </Box>

    <Box>
      <Flex
        alignItems="center"
        mt={2}
        color="gray.700"
        _dark={{
          color: "gray.200",
        }}
      >
       
        
       
      </Flex>

      <Flex alignItems="center" justifyContent="center" mt={4}>
        <Link
          mr={2}
          color="gray.800"
          _dark={{
            color: "gray.400",
          }}
          _hover={{
            color: "gray.700",
            _dark: {
              color: "gray.300",
            },
          }}
          cursor="pointer"
        >
          
        </Link>

        <Link
          mr={2}
          color="gray.800"
          _dark={{
            color: "gray.400",
          }}
          _hover={{
            color: "gray.700",
            _dark: {
              color: "gray.300",
            },
          }}
          cursor="pointer"
        >
          
        </Link>
      </Flex>
    </Box>
  </Box>

</SimpleGrid>; */}

<SimpleGrid columns={3}  py={6} ml={10}
            
            spacing={20}
            flexWrap="wrap"
            
>
  <Box
    w="350px"
    mx="auto"
    py={4}
    px={8}
    bg="white"
    _dark={{
      bg: "gray.800",
    }}
    shadow="lg"
    rounded="lg"
  >
    <Flex
      justifyContent={{
        base: "center",
        md: "end",
      }}
      mt={-16}
    >
      <Image
        w={20}
        h={20}
        fit="contain"
        justifySelf="center"
        ml="20px"
        rounded="full"
        borderStyle="solid"
        borderWidth={2}
        color="#d86b34"
        _dark={{
          color: "brand.400",
        }}
        alt="Testimonial avatar"
        src='assets/images/tokenizaiton.png'
      />
    </Flex>

    <chakra.h2
      color="gray.800"
      _dark={{
        color: "white",
      }}
      fontSize={{
        base: "2xl",
        md: "3xl",
      }}
      textAlign={'left'}
      alignItems="center"
      mt={{
        md: 0,
      }}
      fontWeight="bold"
    >
      Introduction to Tokenization

    </chakra.h2>

    <chakra.p
      mt={2}
      color="gray.600"
      _dark={{
        color: "gray.200",
      }}
    >
    	Our company plans to introduce tokens that represent company shares. 
      Each individual purchasing these tokens becomes a participant in the profits generated by the company.
       50% of all company shares will be reflected through tokens, 
      and their market quantity will be adjusted as needed.
    </chakra.p>

    
  </Box>

  <Box
    w="350px"
    mx="auto"
    py={4}
    px={8}
    bg="white"
    _dark={{
      bg: "gray.800",
    }}
    shadow="lg"
    rounded="lg"
  >
    <Flex
      justifyContent={{
        base: "center",
        md: "end",
      }}
      mt={-16}
    >
      <Image
        w={20}
        h={20}
        fit="contain"
        position="center"
        ml={20}
        rounded="full"
        borderStyle="solid"
        borderWidth={2}
        color="#d86b34"
        _dark={{
          color: "brand.400",
        }}
        alt="Testimonial avatar"
      	src='assets/images/technological.png'
      />
    </Flex>

    <chakra.h2
      color="gray.800"
      _dark={{
        color: "white",
      }}
      fontSize={{
        base: "2xl",
        md: "3xl",
      }}
      textAlign={'left'}
      alignItems="center"
      mt={{
        md: 0,
      }}
      fontWeight="bold"
    >
      Technological Infrastructure

    </chakra.h2>

    <chakra.p
      mt={2}
      color="gray.600"
      _dark={{
        color: "gray.200",
      }}
    >
    	In the initial phase, we will launch a website with a wallet,
       and our tokens will be listed on platforms such as CoinMarketCap and CoinGecko. Additionally,
        we will create our own wallet on our website, enabling storage, value tracking,
       and profit generation from held tokens.
    </chakra.p>

    
  </Box>
  <Box
    w="350px"
    mx="auto"
    py={4}
    px={8}
    bg="white"
    _dark={{
      bg: "gray.800",
    }}
    shadow="lg"
    rounded="lg"
  >
    <Flex
      justifyContent={{
        base: "center",
        md: "end",
      }}
      mt={-16}
    >
      <Image
        w={20}
        h={20}
        fit="contain"
        position="center"
        ml={20}
        rounded="full"
        borderStyle="solid"
        borderWidth={2}
        color="#d86b34"
        _dark={{
          color: "brand.400",
        }}
        alt="Testimonial avatar"
        src='assets/images/development_fund.png' 
      />
    </Flex>

    <chakra.h2
      color="gray.800"
      _dark={{
        color: "white",
      }}
      fontSize={{
        base: "2xl",
        md: "3xl",
      }}
      textAlign={'left'}
      alignItems="center"
      mt={{
        md: 0,
      }}
      fontWeight="bold"
    >
      Development Funding

    </chakra.h2>

    <chakra.p
      mt={2}
      color="gray.600"
      _dark={{
        color: "gray.200",
      }}
    >
    
All proceeds from token sales will be allocated to platform development and the purchase of assets on which subsequent projects will be based. 
Our tokens differ from standard stablecoins, as their value will increase with the associated asset, making investments more attractive.

    </chakra.p>

    
  </Box>

  <Box
     w="350px"
    mx="auto"
    py={4}
    px={8}
    bg="white"
    _dark={{
      bg: "gray.800",
    }}
    shadow="lg"
    rounded="lg"
  >
    <Flex
      justifyContent={{
        base: "center",
        md: "end",
      }}
      mt={-16}
    >
      <Image
        w={20}
        h={20}
        fit="contain"
        alignItems="center"
        rounded="full"
        borderStyle="solid"
        bg="white"
        borderWidth={2}
        color="#d86b34"
        _dark={{
          color: "brand.400",
        }}
        alt="Testimonial avatar"
        src='assets/images/assetsinvestment.png'
      />
    </Flex>

    <chakra.h2
      color="gray.800"
      _dark={{
        color: "white",
      }}
      fontSize={{
        base: "2xl",
        md: "3xl",
      }}
      textAlign={'left'}
     
      
      fontWeight="bold"
    >
    Investments in Assets
    </chakra.h2>

    <chakra.p
      mt={2}
      color="gray.600"
      _dark={{
        color: "gray.200",
      }}
    >
    	Managing the acquired funds, the company plans to invest in diverse income-generating assets.
       Assets will be available for purchase through tokenization, allowing investors to participate in real estate, lands,
        hotels, and other projects.

    </chakra.p>

    
  </Box>

  <Box
     w="350px"
    mx="auto"
    py={4}
    px={8}
    bg="white"
    _dark={{
      bg: "gray.800",
    }}
    shadow="lg"
    rounded="lg"
  >
    <Flex
      justifyContent={{
        base: "center",
        md: "end",
      }}
      mt={-16}
    >
      <Image
        w={20}
        h={20}
        fit="contain"
        alignItems="center"
        rounded="full"
        borderStyle="solid"
        bg="white"
        borderWidth={2}
        color="#d86b34"
        _dark={{
          color: "brand.400",
        }}
        alt="Testimonial avatar"
        src='assets/images/assettokenization.png'
      />
    </Flex>

    <chakra.h2
      color="gray.800"
      _dark={{
        color: "white",
      }}
      fontSize={{
        base: "2xl",
        md: "3xl",
      }}
      textAlign={'left'}
     
      
      fontWeight="bold"
    >
Asset Tokenization

    </chakra.h2>

    <chakra.p
      mt={2}
      color="gray.600"
      _dark={{
        color: "gray.200",
      }}
    >
    	Our platform will enable the tokenization of assets, allowing users to acquire shares in various investments. Tokens, 
      such as "Real Golds," will be used to pay commissions from the profits earned by the company and will be available on our platform.

    </chakra.p>

    
  </Box>


  <Box
     w="350px"
    mx="auto"
    py={4}
    px={8}
    bg="white"
    _dark={{
      bg: "gray.800",
    }}
    shadow="lg"
    rounded="lg"
  >
    <Flex
      justifyContent={{
        base: "center",
        md: "end",
      }}
      mt={-16}
    >
      <Image
        w={20}
        h={20}
        fit="contain"
        alignItems="center"
        rounded="full"
        borderStyle="solid"
        bg="white"
        borderWidth={2}
        color="#d86b34"
        _dark={{
          color: "brand.400",
        }}
        alt="Testimonial avatar"
        src='assets/images/communitygroup.png' 
      />
    </Flex>

    <chakra.h2
      color="gray.800"
      _dark={{
        color: "white",
      }}
      fontSize={{
        base: "2xl",
        md: "3xl",
      }}
      textAlign={'left'}
     
      
      fontWeight="bold"
    >
    Community Decisions and Investment 
    </chakra.h2>

    <chakra.p
      mt={2}
      color="gray.600"
      _dark={{
        color: "gray.200",
      }}
    >
    
We are building a community that can propose asset tokenization and vote on decisions related to a particular asset (sale, rental, etc.).
 Our company will manage tokenization, the sale of tokens associated with a specific asset,
  and profits will be evenly distributed among token holders.


    </chakra.p>

    
  </Box>

  <Box
     w="350px"
    mx="auto"
    py={4}
    px={8}
    bg="white"
    _dark={{
      bg: "gray.800",
    }}
    shadow="lg"
    rounded="lg"
  >
    <Flex
      justifyContent={{
        base: "center",
        md: "end",
      }}
      mt={-16}
    >
      <Image
        w={20}
        h={20}
        fit="contain"
        alignItems="center"
        rounded="full"
        borderStyle="solid"
        bg="white"
        borderWidth={2}
        color="#d86b34"
        _dark={{
          color: "brand.400",
        }}
        alt="Testimonial avatar"
        src='assets/images/expantion.png' 
      />
    </Flex>

    <chakra.h2
      color="gray.800"
      _dark={{
        color: "white",
      }}
      fontSize={{
        base: "2xl",
        md: "3xl",
      }}
      textAlign={'left'}
     
      
      fontWeight="bold"
    >
    International Expansion
    </chakra.h2>

    <chakra.p
      mt={2}
      color="gray.600"
      _dark={{
        color: "gray.200",
      }}
    >
Over time, we plan to expand into international markets by establishing branches in different countries.



    </chakra.p>

    
  </Box>
</SimpleGrid>;

				</div>
			</div>
		</div>
  )
}

export default Availablity