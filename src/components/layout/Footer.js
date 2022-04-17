import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Logo from './partials/Logo';
import FooterNav from './partials/FooterNav';
import FooterSocial from './partials/FooterSocial';

const propTypes = {
  topOuterDivider: PropTypes.bool,
  topDivider: PropTypes.bool
}

const defaultProps = {
  topOuterDivider: false,
  topDivider: false
}

const Footer = ({
  className,
  topOuterDivider,
  topDivider,
  ...props
}) => {

  const classes = classNames(
    'site-footer center-content-mobile',
    topOuterDivider && 'has-top-divider',
    className
  );

  return (
    <footer
      {...props}
      className={classes}
    >
      <div className="container" style={{justifyContent:'center',alignContent:'center',textAlign:'center',alignItems:'center',display:'flex'}}>
        <div className={
          classNames(
            'site-footer-inner',
            topDivider && 'has-top-divider'
          )}>
          <div className="footer-top space-between text-xxs" style={{justifyContent:'center',alignContent:'center',textAlign:'center',alignItems:'center',}} >
            {/* <Logo /> */}
            {/* <FooterSocial /> */}
             {/* <h3 data-reveal-delay="200">
              Muhammad Haris Sikander 
            </h3> */}
          </div>
          <div className="footer-bottom text-xxs invert-order-desktop">
            {/* <FooterNav /> */}
            <div className="footer-copyright">Made by <a href="https://cruip.com">Haris Sikander</a>. All right reserved</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;