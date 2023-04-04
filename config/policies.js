/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {

  /***************************************************************************
  *                                                                          *
  * Default policy for all controllers and actions, unless overridden.       *
  * (`true` allows public access)                                            *
  *                                                                          *
  ***************************************************************************/

  function (req, res, ok) {

  // User is allowed, proceed to controller
  var is_auth = req.isAuthenticated()
  if (is_auth) return next();
  // User is not allowed
  else return res.redirect("/login");
}

};
