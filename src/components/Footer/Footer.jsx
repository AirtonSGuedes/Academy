import './Footer.css'

export function Footer() 
{
    return (
         <footer class="footer-10">
        <div class="container">
            <div class="row mb-5 pb-3 no-gutters">
                <div class="col-md-4 mb-md-0 mb-4 d-flex">
                    <div class="con con-1 w-100 py-5">
                        <div class="con-info w-100 text-center">
                            <div class="icon d-flex align-items-center justify-content-center">
                                <span class="ion-ios-call">📞</span>
                            </div>
                            <div class="text">
                                <span>(+00) 1234 5678</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-md-0 mb-4 d-flex">
                    <div class="con con-2 w-100 py-5">
                        <div class="con-info w-100 text-center">
                            <div class="icon d-flex align-items-center justify-content-center">
                                <span class="ion-ios-mail">✉   </span>
                            </div>
                            <div class="text">
                                <span>info@email.com</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-md-0 mb-4 d-flex">
                    <div class="con con-3 w-100 py-5">
                        <div class="con-info w-100 text-center">
                            <div class="icon d-flex align-items-center justify-content-center">
                                <span class="ion-ios-pin"> 🏠</span>
                            </div>
                            <div class="text">
                                <span>203 Fake St. Mountain View, San Francisco, California, USA</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-7">
                    <div class="row">
                        <div class="col-md-4 mb-md-0 mb-4">
                            <h2 class="footer-heading">About</h2>
                            <ul class="list-unstyled">
                                <li><a href="#" class="d-block">Out story</a></li>
                                <li><a href="#" class="d-block">Awards</a></li>
                                <li><a href="#" class="d-block">Our Team</a></li>
                                <li><a href="#" class="d-block">Career</a></li>
                            </ul>
                        </div>
                        <div class="col-md-4 mb-md-0 mb-4">
                            <h2 class="footer-heading">Company</h2>
                            <ul class="list-unstyled">
                                <li><a href="#" class="d-block">Our services</a></li>
                                <li><a href="#" class="d-block">Clients</a></li>
                                <li><a href="#" class="d-block">Contact</a></li>
                                <li><a href="#" class="d-block">Press</a></li>
                            </ul>
                        </div>
                        <div class="col-md-4 mb-md-0 mb-4">
                            <h2 class="footer-heading">Resources</h2>
                            <ul class="list-unstyled">
                                <li><a href="#" class="d-block">Blog</a></li>
                                <li><a href="#" class="d-block">Newsletter</a></li>
                                <li><a href="#" class="d-block">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-5 mb-md-0 mb-4">
                    <h2 class="footer-heading">Subscribe</h2>
                    <form action="#" class="subscribe-form">
                        <div class="form-group d-flex">
                            <input type="text" class="form-control rounded-left" placeholder="Enter email address"/ >
                            <button type="submit" class="form-control submit rounded-right">Subscribe</button>
                        </div>
                        <span class="subheading">Get digital marketing updates in your mailbox</span>
                    </form>
                </div>
            </div>
            <div class="row mt-5 pt-4 border-top">
                <div class="col-md-6 col-lg-8 mb-md-0 mb-4">
                    <p class="copyright mb-0">
                        
                        Copyright &copy;
                        <script>document.write(new Date().getFullYear());</script> All rights reserved. | This template
                        is
                        made with <i class="ion-ios-heart" aria-hidden="true"></i> by <a href="https://colorlib.com"
                            target="_blank">Colorlib.com</a>
                        
                    </p>
                </div>
               
            </div>
        </div>
    </footer>
    )
}